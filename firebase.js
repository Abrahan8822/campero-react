// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:"AIzaSyCWVOqsSWusansrlI-lyGaNtRKgzg6fRVk",
  authDomain: "crud-react-84cf8.firebaseapp.com",
  projectId: "crud-react-84cf8",
  storageBucket: "crud-react-84cf8.appspot.com",
  messagingSenderId: "686191697228",
  appId: "1:686191697228:web:a3cf1d1343fe92e68bc3e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()