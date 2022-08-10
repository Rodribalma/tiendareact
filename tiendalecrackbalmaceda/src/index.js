import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTQiYoWHtIXZPpNUTyFr6lpbmF3LHwZ3I",
  authDomain: "tiendalecrack.firebaseapp.com",
  projectId: "tiendalecrack",
  storageBucket: "tiendalecrack.appspot.com",
  messagingSenderId: "710656009286",
  appId: "1:710656009286:web:b489708371204fd53ad647",
};
// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
