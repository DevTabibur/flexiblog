import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey:process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_AUTH_DOMAIN,
  projectId:process.env.REACT_APP_PROJECT_ID,
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId:process.env.REACT_APP_APPID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBMaploUPCJL4BAbWZK0P7S7jsWSJ1ImVA",
//   authDomain: "flexiblog-topu.firebaseapp.com",
//   projectId: "flexiblog-topu",
//   storageBucket: "flexiblog-topu.appspot.com",
//   messagingSenderId: "176693561238",
//   appId: "1:176693561238:web:9ff9aedca683d897ae3fb7"
// };

// console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;