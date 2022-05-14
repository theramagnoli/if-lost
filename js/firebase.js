import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  collection,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCO-1zlqihZNJAGUqfbezRKdAbx2xVRurA",
  authDomain: "if-lost-159f6.firebaseapp.com",
  projectId: "if-lost-159f6",
  storageBucket: "if-lost-159f6.appspot.com",
  messagingSenderId: "55254413607",
  appId: "1:55254413607:web:2b14450ddb1a97bdccb902",
};

initializeApp(firebaseConfig);

const auth = getAuth();
const database = getFirestore();
const storage = getStorage();

export {
  auth,
  database,
  storage,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  doc,
  setDoc,
  getDocs,
  collection,
  getDoc,
  updateDoc,
  signOut,
  ref,
  uploadBytes,
};
