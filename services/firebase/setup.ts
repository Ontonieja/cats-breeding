// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBAzXR-QYdF4WTps5dDoj_aPfmQQgJj-Ws',
  authDomain: 'cats-9a86c.firebaseapp.com',
  projectId: 'cats-9a86c',
  storageBucket: 'cats-9a86c.appspot.com',
  messagingSenderId: '215544828227',
  appId: '1:215544828227:web:4182ef582f2c4c31bedff6',
};

// Initialize Firebase
const firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const storage = getStorage(firebase_app);

export default firebase_app;
