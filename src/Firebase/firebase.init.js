// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMaploUPCJL4BAbWZK0P7S7jsWSJ1ImVA",
  authDomain: "flexiblog-topu.firebaseapp.com",
  projectId: "flexiblog-topu",
  storageBucket: "flexiblog-topu.appspot.com",
  messagingSenderId: "176693561238",
  appId: "1:176693561238:web:9ff9aedca683d897ae3fb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;