import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAADctY2EcX_5ShE7yChcG0waU9ZLn7s3c",
  authDomain: "dacu-tienda.firebaseapp.com",
  projectId: "dacu-tienda",
  storageBucket: "dacu-tienda.appspot.com",
  messagingSenderId: "798667349872",
  appId: "1:798667349872:web:d3b32d67e4e4538c8e39b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
