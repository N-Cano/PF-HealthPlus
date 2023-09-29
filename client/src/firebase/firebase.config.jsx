import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAJrmBNAQC28GDuuVRejYlw9AWRI5U_GLI",
  authDomain: "health-plus-pf.firebaseapp.com",
  projectId: "health-plus-pf",
  storageBucket: "health-plus-pf.appspot.com",
  messagingSenderId: "750567138574",
  appId: "1:750567138574:web:1e11b08dce75377c1be35f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);