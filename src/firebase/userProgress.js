import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./config";
import { sanitizeForFirestore } from "./firestore";

/**
 * Mengambil snapshot progres belajar pelajar dari `users/{uid}`.
 * Gagal izin/jaringan ditangani lembut agar progres lokal tetap jalan penuh.
 */
export async function fetchUserCloudData(uid) {
  if (!uid || !db) return { ok: false, data: null, permissionDenied: false };
  try {
    const snap = await getDoc(doc(db, "users", uid));
    return {
      ok: true,
      data: snap.exists() ? snap.data() : null,
      permissionDenied: false
    };
  } catch (err) {
    const permissionDenied = err?.code === "permission-denied";
    if (!permissionDenied) {
      console.warn("Firestore fetchUserCloudData error:", err);
    }
    return { ok: false, data: null, permissionDenied };
  }
}

/**
 * Menyimpan snapshot profil, bookmark, dan progres bab/paket soal ke `users/{uid}`.
 */
export async function saveUserCloudData(uid, payload) {
  if (!uid || !db || !payload) return { ok: false, permissionDenied: false };
  try {
    const clean = sanitizeForFirestore({
      ...payload,
      updatedAt: new Date().toISOString()
    });
    await setDoc(doc(db, "users", uid), clean, { merge: true });
    return { ok: true, permissionDenied: false };
  } catch (err) {
    const permissionDenied = err?.code === "permission-denied";
    if (!permissionDenied) {
      console.warn("Firestore saveUserCloudData error:", err);
    }
    return { ok: false, permissionDenied };
  }
}
