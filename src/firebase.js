

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJZ8aHINhg6KuzsLI04Nhs_mtT_Npk5GE",
  authDomain: "civic-orbit.firebaseapp.com",
  projectId: "civic-orbit",
  storageBucket: "civic-orbit.firebasestorage.app",
  messagingSenderId: "426509974699",
  appId: "1:426509974699:web:be85669d43c6003401cbee",
  measurementId: "G-F1708ET6WZ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
// export const storage = getStorage(app);

export default app;