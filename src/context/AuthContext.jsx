import React, { createContext, useState, useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  getProgress,
  getStudyState,
  mergeStudyStates,
  replaceAllLocalProgress,
  PROGRESS_EVENT,
  STUDY_STATE_EVENT
} from '../utils/progress';

const AuthContext = createContext(null);

/**
 * Firebase (±150 KB) dimuat saat pengguna membuka /akun atau perangkat ini pernah login.
 * Pengunjung anonim tetap bisa memakai seluruh materi & paket soal tanpa mengunduhnya.
 */
const AUTH_FLAG = 'duta_auth_device';
const LEGACY_FLAG = 'amj_teacher_device';
const loadAuth = () => import('../firebase/auth');
const loadCloud = () => import('../firebase/userProgress');

function hasAuthFlag() {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') return false;
  try {
    return localStorage.getItem(AUTH_FLAG) === '1' || localStorage.getItem(LEGACY_FLAG) === '1';
  } catch {
    return false;
  }
}

function setAuthFlag(on) {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') return;
  try {
    if (on) localStorage.setItem(AUTH_FLAG, '1');
    else {
      localStorage.removeItem(AUTH_FLAG);
      localStorage.removeItem(LEGACY_FLAG);
    }
  } catch {
    // penyimpanan perangkat tidak tersedia: abaikan
  }
}

export function AuthProvider({ children }) {
  const location = useLocation();
  const needsAuth = location.pathname.startsWith('/akun') || hasAuthFlag();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(needsAuth);
  const [started, setStarted] = useState(false);
  const [syncStatus, setSyncStatus] = useState('idle'); // 'idle' | 'syncing' | 'synced' | 'local-only'
  const syncTimerRef = useRef(null);
  const hydratedUidRef = useRef(null);

  if (needsAuth && !started) setStarted(true);

  const ensureAuthReady = useCallback(() => {
    setStarted(true);
  }, []);

  const syncWithCloud = useCallback(async (uid) => {
    if (!uid) return;
    setSyncStatus('syncing');
    try {
      const { fetchUserCloudData, saveUserCloudData } = await loadCloud();
      const res = await fetchUserCloudData(uid);
      if (res.permissionDenied) {
        setSyncStatus('local-only');
        return;
      }
      const localBundle = { chapters: getProgress(), study: getStudyState() };
      const remoteBundle = res.data || {};
      const merged = mergeStudyStates(localBundle, remoteBundle);
      replaceAllLocalProgress(merged);
      const saveRes = await saveUserCloudData(uid, merged);
      hydratedUidRef.current = uid;
      setSyncStatus(saveRes.ok ? 'synced' : 'local-only');
    } catch {
      setSyncStatus('local-only');
    }
  }, []);

  useEffect(() => {
    if (!started) return undefined;
    let unsubscribe = () => {};
    let active = true;
    loadAuth().then(({ subscribeToAuth }) => {
      if (!active) return;
      unsubscribe = subscribeToAuth((currentUser) => {
        setUser(currentUser);
        setIsLoading(false);
        setAuthFlag(Boolean(currentUser));
        if (currentUser?.uid) {
          if (hydratedUidRef.current !== currentUser.uid) {
            syncWithCloud(currentUser.uid);
          }
        } else {
          hydratedUidRef.current = null;
          setSyncStatus('idle');
        }
      });
    }).catch(() => setIsLoading(false));
    return () => {
      active = false;
      unsubscribe();
    };
  }, [started, syncWithCloud]);

  // Debounce-sync perubahan progres lokal ke Firestore ketika sudah masuk
  useEffect(() => {
    if (!user?.uid) return undefined;
    const scheduleSync = () => {
      if (hydratedUidRef.current !== user.uid) return;
      if (syncTimerRef.current) clearTimeout(syncTimerRef.current);
      syncTimerRef.current = setTimeout(async () => {
        try {
          const { saveUserCloudData } = await loadCloud();
          const res = await saveUserCloudData(user.uid, {
            chapters: getProgress(),
            study: getStudyState()
          });
          setSyncStatus(res.ok ? 'synced' : 'local-only');
        } catch {
          setSyncStatus('local-only');
        }
      }, 1500);
    };
    window.addEventListener(STUDY_STATE_EVENT, scheduleSync);
    window.addEventListener(PROGRESS_EVENT, scheduleSync);
    return () => {
      window.removeEventListener(STUDY_STATE_EVENT, scheduleSync);
      window.removeEventListener(PROGRESS_EVENT, scheduleSync);
      if (syncTimerRef.current) clearTimeout(syncTimerRef.current);
    };
  }, [user]);

  const login = async (email, password) => {
    setStarted(true);
    const { loginWithEmail } = await loadAuth();
    const result = await loginWithEmail(email, password);
    if (result.success) {
      setUser(result.user);
      setAuthFlag(true);
    }
    return result;
  };

  const register = async (email, password, displayName) => {
    setStarted(true);
    const { registerWithEmail } = await loadAuth();
    const result = await registerWithEmail(email, password, displayName);
    if (result.success) {
      setUser(result.user);
      setAuthFlag(true);
    }
    return result;
  };

  const loginGoogle = async () => {
    setStarted(true);
    const { loginWithGoogle } = await loadAuth();
    const result = await loginWithGoogle();
    if (result.success) {
      setUser(result.user);
      setAuthFlag(true);
    }
    return result;
  };

  const updateName = async (displayName) => {
    const { updateUserName } = await loadAuth();
    const res = await updateUserName(displayName);
    if (res.success && res.user) {
      setUser({ ...res.user });
    }
    return res;
  };

  const logout = async () => {
    const { logoutUser } = await loadAuth();
    const result = await logoutUser();
    if (result.success) {
      hydratedUidRef.current = null;
      setUser(null);
      setSyncStatus('idle');
      setAuthFlag(false);
    }
    return result;
  };

  const getIdToken = async (forceRefresh = false) => {
    const { getCurrentIdToken } = await loadAuth();
    return getCurrentIdToken(forceRefresh);
  };

  const displayName = user?.displayName || user?.email?.split('@')[0] || 'Pelajar';
  const value = {
    user,
    uid: user?.uid || null,
    email: user?.email || '',
    displayName,
    photoURL: user?.photoURL || '',
    isAuthenticated: Boolean(user),
    isLoading,
    syncStatus,
    ensureAuthReady,
    login,
    register,
    loginGoogle,
    updateName,
    logout,
    getIdToken,
    syncNow: () => (user?.uid ? syncWithCloud(user.uid) : Promise.resolve())
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
