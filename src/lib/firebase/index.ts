import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiG6scpd3bzCeCBiv60-Z-gQeEX1tc03s",
  authDomain: "yield-master.firebaseapp.com",
  projectId: "yield-master",
  storageBucket: "yield-master.appspot.com",
  messagingSenderId: "793696024570",
  appId: "1:793696024570:web:46fec669b25c5618ad5643",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
