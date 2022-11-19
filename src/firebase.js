// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvU3nRdjq5s_kw4dBqInPWjadTWf-NcZ4",
  authDomain: "realtor-clone-react-d8180.firebaseapp.com",
  projectId: "realtor-clone-react-d8180",
  storageBucket: "realtor-clone-react-d8180.appspot.com",
  messagingSenderId: "333314542649",
  appId: "1:333314542649:web:97ab41f6b9cdcb3b6891e8"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();