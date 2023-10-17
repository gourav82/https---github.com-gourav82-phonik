// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,RecaptchaVerifier } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCJbrHd-64yhbBdLiIDsX0rw34EQ82s-tw",
  authDomain: "spice-heaven-f1dd3.firebaseapp.com",
  projectId: "spice-heaven-f1dd3",
  storageBucket: "spice-heaven-f1dd3.appspot.com",
  messagingSenderId: "100118857309",
  appId: "1:100118857309:web:8739aecc72fcab8b082fb4",
  measurementId: "G-NVG1G7SNQ9"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
