import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp52759XIrA14Muojtb8GlbanxDY_fGFQ",
  authDomain: "coderbd-c1d87.firebaseapp.com",
  projectId: "coderbd-c1d87",
  storageBucket: "coderbd-c1d87.appspot.com",
  messagingSenderId: "825722496680",
  appId: "1:825722496680:web:d486da552e25ae31acc49d",
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
