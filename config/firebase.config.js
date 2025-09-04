// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {collection, getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBXQkhVL94PuZMvvvMm-Y1vbQrLCKNvmhI',
  authDomain: 'expensify-1f856.firebaseapp.com',
  projectId: 'expensify-1f856',
  storageBucket: 'expensify-1f856.firebasestorage.app',
  messagingSenderId: '251004932218',
  appId: '1:251004932218:web:63d454ff5d806c3b986bc3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();

export const tripRef = collection(db, 'trips');
export const expensesRef = collection(db, 'expenses');

export default app;
