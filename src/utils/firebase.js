// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-f6264.firebaseapp.com",
  projectId: "taskmanager-f6264",
  storageBucket: "taskmanager-f6264.appspot.com",
  messagingSenderId: "673338328762",
  appId: "1:673338328762:web:beef6e1b88b16dc4d9e483",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
