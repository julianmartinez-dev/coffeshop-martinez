import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from 'firebase/app'


const firebaseConfig = {
  apiKey : import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain : import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId : import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket : import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId : import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId : import.meta.env.VITE_FIREBASE_APPID,
}

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
