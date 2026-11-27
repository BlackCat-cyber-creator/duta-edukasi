import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  addDoc,
  query,
  where,
  onSnapshot
} from 'firebase/firestore';
import { db } from './config';
import { sanitizeForFirestore } from './firestore';
import { generateId } from '../utils/idGenerator';
import { normalizeEmail, sanitizeLivePath } from '../utils/liveConfig';

function requireDb() {
  if (!db) {
    throw new Error('Koneksi Firebase belum siap. Periksa internet lalu muat ulang halaman.');
  }
  return db;
}

export async function createLiveRoom({
  teacherUid,
  teacherEmail,
  teacherName,
  studentEmail,
  studentName = '',
  topic = '',
  initialPath = '/paket-soal'
}) {
  if (!teacherUid) throw new Error('Teacher UID wajib ada');
  const cleanTeacherEmail = normalizeEmail(teacherEmail);
  const cleanStudentEmail = normalizeEmail(studentEmail);
  if (!cleanStudentEmail) throw new Error('Email murid wajib diisi');

  const id = generateId('live');
  const now = new Date().toISOString();
  const payload = sanitizeForFirestore({
    id,
    teacherUid,
    teacherEmail: cleanTeacherEmail,
    teacherName: String(teacherName || 'Pengajar').trim(),
    studentEmail: cleanStudentEmail,
    studentName: String(studentName || '').trim(),
    topic: String(topic || '').trim(),
    status: 'ringing',
    callEpoch: 1,
    workspaceMode: 'soal',
    sharedPath: sanitizeLivePath(initialPath, '/paket-soal'),
    allowStudentDraw: true,
    offer: null,
    answer: null,
    studentUid: null,
    studentJoinedAt: null,
    ringingAt: now,
    createdAt: now,
    updatedAt: now
  });

  await setDoc(doc(requireDb(), 'liveRooms', id), payload);
  return payload;
}

export async function getLiveRoom(roomId) {
  if (!roomId || !db) return null;
  const snap = await getDoc(doc(db, 'liveRooms', roomId));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export function subscribeLiveRoom(roomId, onData, onError) {
  if (!roomId || !db) return () => {};
  return onSnapshot(
    doc(db, 'liveRooms', roomId),
    (snap) => {
      onData(snap.exists() ? { id: snap.id, ...snap.data() } : null);
    },
    (err) => {
      if (onError) onError(err);
    }
  );
}

export function subscribeTeacherRooms(teacherUid, onData, onError) {
  if (!teacherUid || !db) return () => {};
  const q = query(collection(db, 'liveRooms'), where('teacherUid', '==', teacherUid));
  return onSnapshot(
    q,
    (snapshot) => {
      const rooms = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      rooms.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
      onData(rooms);
    },
    (err) => {
      if (onError) onError(err);
    }
  );
}

export function subscribeStudentIncomingRooms(studentEmail, onData, onError) {
  const clean = normalizeEmail(studentEmail);
  if (!clean || !db) return () => {};
  const q = query(collection(db, 'liveRooms'), where('studentEmail', '==', clean));
  return onSnapshot(
    q,
    (snapshot) => {
      const rooms = snapshot.docs
        .map((d) => ({ id: d.id, ...d.data() }))
        .filter((r) => r.status === 'ringing' || r.status === 'active');
      rooms.sort(
        (a, b) =>
          new Date(b.ringingAt || b.createdAt || 0) - new Date(a.ringingAt || a.createdAt || 0)
      );
      onData(rooms);
    },
    (err) => {
      if (onError) onError(err);
    }
  );
}

export async function updateLiveRoom(roomId, patch) {
  if (!roomId || !patch) return;
  const payload = sanitizeForFirestore({
    ...patch,
    updatedAt: new Date().toISOString()
  });
  await updateDoc(doc(requireDb(), 'liveRooms', roomId), payload);
}

export async function ringLiveRoom(roomId) {
  if (!roomId) return;
  const now = new Date().toISOString();
  await updateDoc(doc(requireDb(), 'liveRooms', roomId), {
    status: 'ringing',
    ringingAt: now,
    updatedAt: now
  });
}

export async function clearCandidates(roomId, subcollectionName) {
  if (!roomId || !db) return;
  try {
    const snap = await getDocs(collection(db, 'liveRooms', roomId, subcollectionName));
    await Promise.all(snap.docs.map((d) => deleteDoc(d.ref).catch(() => {})));
  } catch {
    // Abaikan error pembersihan kandidat agar tidak mengganggu penutupan sesi
  }
}

export async function endLiveRoom(roomId) {
  if (!roomId) return;
  const now = new Date().toISOString();
  await updateDoc(doc(requireDb(), 'liveRooms', roomId), {
    status: 'ended',
    endedAt: now,
    updatedAt: now,
    offer: null,
    answer: null
  });
  await Promise.all([
    clearCandidates(roomId, 'offerCandidates'),
    clearCandidates(roomId, 'answerCandidates')
  ]);
}

export async function deleteLiveRoom(roomId) {
  if (!roomId) return;
  await Promise.all([
    clearCandidates(roomId, 'offerCandidates'),
    clearCandidates(roomId, 'answerCandidates')
  ]);
  await deleteDoc(doc(requireDb(), 'liveRooms', roomId));
}

export async function addIceCandidate(roomId, subcollectionName, candidateObj, epoch) {
  if (!roomId || !candidateObj) return;
  await addDoc(
    collection(requireDb(), 'liveRooms', roomId, subcollectionName),
    sanitizeForFirestore({
      ...candidateObj,
      epoch: Number(epoch || 1),
      createdAt: new Date().toISOString()
    })
  );
}

export function subscribeIceCandidates(roomId, subcollectionName, onCandidate, onError) {
  if (!roomId || !db) return () => {};
  const colRef = collection(db, 'liveRooms', roomId, subcollectionName);
  return onSnapshot(
    colRef,
    (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          onCandidate({ id: change.doc.id, ...change.doc.data() });
        }
      });
    },
    (err) => {
      if (onError) onError(err);
    }
  );
}
