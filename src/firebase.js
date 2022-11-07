import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0JPzrGrXbGPvFamWwgdO76boqxJL-LBw",
  authDomain: "blog-with-react-and-fire-8749a.firebaseapp.com",
  projectId: "blog-with-react-and-fire-8749a",
  storageBucket: "blog-with-react-and-fire-8749a.appspot.com",
  messagingSenderId: "220280106761",
  appId: "1:220280106761:web:b67bed9b37c83d22edadd8"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };