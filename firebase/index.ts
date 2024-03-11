// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, Firestore } from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db: Firestore = getFirestore(app) as Firestore;
export { app, db, collection, getFirestore };
