import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3_379DvpirsmJ4Dw3JtkoUCeUMR-cO7o",
  authDomain: "nature-s-glow.firebaseapp.com",
  projectId: "nature-s-glow",
  storageBucket: "nature-s-glow.appspot.com",
  messagingSenderId: "776869057389",
  appId: "1:776869057389:web:aa5de8dc4ef47230988064",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let Auth = getAuth(app);
export let GoogleProvider = new GoogleAuthProvider();
