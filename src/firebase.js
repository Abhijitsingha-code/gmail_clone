import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDi84XONposALT220Qps4ytSFh8WaDzjWI",
  authDomain: "clone-add97.firebaseapp.com",
  projectId: "clone-add97",
  storageBucket: "clone-add97.appspot.com",
  messagingSenderId: "17968468749",
  appId: "1:17968468749:web:f4277763d8994dc5d9d644",
  measurementId: "G-CRD0Z5HY96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider(auth);

export {auth, db, provider}
