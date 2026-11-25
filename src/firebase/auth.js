import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile
} from "firebase/auth";
import { auth } from "./config";

/**
 * Format pesan error Firebase Auth ke Bahasa Indonesia yang ramah pengguna.
 */
export function getFriendlyAuthErrorMessage(error) {
  const code = error?.code || "";
  switch (code) {
    case "auth/invalid-credential":
    case "auth/wrong-password":
      return "Email atau kata sandi tidak cocok. Silakan coba lagi.";
    case "auth/user-not-found":
      return "Akun tidak ditemukan. Silakan daftar akun baru atau masuk dengan Google.";
    case "auth/email-already-in-use":
      return "Alamat email ini sudah terdaftar. Silakan pilih tab Masuk.";
    case "auth/weak-password":
      return "Kata sandi terlalu pendek. Gunakan minimal 6 karakter.";
    case "auth/invalid-email":
      return "Format email tidak valid. Contoh: siswa@email.com";
    case "auth/popup-closed-by-user":
    case "auth/cancelled-popup-request":
      return "Jendela masuk Google ditutup sebelum selesai.";
    case "auth/operation-not-allowed":
      return "Login Google belum diaktifkan di proyek Firebase. Gunakan masuk dengan Email sementara ini.";
    case "auth/network-request-failed":
      return "Gagal terhubung ke server Firebase. Periksa koneksi internet Anda.";
    case "auth/too-many-requests":
      return "Terlalu banyak percobaan gagal. Silakan tunggu beberapa saat.";
    default:
      return error?.message || "Terjadi kesalahan saat otentikasi.";
  }
}

export async function loginWithEmail(email, password) {
  if (!auth) {
    return { success: false, error: "Layanan autentikasi belum siap atau tidak tersedia." };
  }
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error("Firebase Login Error:", error);
    return { success: false, error: getFriendlyAuthErrorMessage(error), rawError: error };
  }
}

export async function registerWithEmail(email, password, displayName = "Pelajar Duta e-dukasi") {
  if (!auth) {
    return { success: false, error: "Layanan autentikasi belum siap atau tidak tersedia." };
  }
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password);
    if (displayName && displayName.trim()) {
      await updateProfile(userCredential.user, { displayName: displayName.trim() });
    }
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error("Firebase Registration Error:", error);
    return { success: false, error: getFriendlyAuthErrorMessage(error), rawError: error };
  }
}

export async function loginWithGoogle() {
  if (!auth) {
    return { success: false, error: "Layanan autentikasi belum siap atau tidak tersedia." };
  }
  try {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    const userCredential = await signInWithPopup(auth, provider);
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error("Firebase Google Login Error:", error);
    return { success: false, error: getFriendlyAuthErrorMessage(error), rawError: error };
  }
}

export async function updateUserName(displayName) {
  if (!auth?.currentUser) return { success: false, error: "Belum masuk." };
  try {
    await updateProfile(auth.currentUser, { displayName: String(displayName || "").trim() });
    return { success: true, user: auth.currentUser };
  } catch (error) {
    return { success: false, error: getFriendlyAuthErrorMessage(error) };
  }
}

export async function logoutUser() {
  if (!auth) return { success: true };
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error("Firebase SignOut Error:", error);
    return { success: false, error: error.message };
  }
}

export function subscribeToAuth(callback) {
  if (!auth) {
    callback(null);
    return () => {};
  }
  return onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}

export async function getCurrentIdToken(forceRefresh = false) {
  if (!auth?.currentUser) return null;
  try {
    return await auth.currentUser.getIdToken(forceRefresh);
  } catch {
    return null;
  }
}
