import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpP3Jij1bGmAsW3Qi0xraNUPFcz0RXMUw",

  authDomain: "algotest-311ec.firebaseapp.com",

  projectId: "algotest-311ec",

  storageBucket: "algotest-311ec.appspot.com",

  messagingSenderId: "571215916008",

  appId: "1:571215916008:web:ed66a037203588e1f1525d",

  measurementId: "G-4RPY3D23MN",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
