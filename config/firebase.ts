import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import asyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAYovRZdlzaOBx21QNaXgTgVozA63cpzTM",
  authDomain: "expense-tracker-91171.firebaseapp.com",
  projectId: "expense-tracker-91171",
  storageBucket: "expense-tracker-91171.firebasestorage.app",
  messagingSenderId: "1040739949486",
  appId: "1:1040739949486:web:261c23dbe653f850b8863f",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(asyncStorage),
});

export const DB = getFirestore(app);
