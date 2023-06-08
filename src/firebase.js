// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK1v_cts7fdAVuwsSuq83vlUPuXnFVprk",
  authDomain: "svelte-tuto-524ab.firebaseapp.com",
  projectId: "svelte-tuto-524ab",
  storageBucket: "svelte-tuto-524ab.appspot.com",
  messagingSenderId: "121297509733",
  appId: "1:121297509733:web:68bdf14a98bcbc8bc6558c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);