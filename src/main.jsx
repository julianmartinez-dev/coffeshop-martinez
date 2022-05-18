import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBlim_0rloBzfFS0jIfF61uWW5RAbD66bE',
  authDomain: 'coffeshop-2f5ff.firebaseapp.com',
  projectId: 'coffeshop-2f5ff',
  storageBucket: 'coffeshop-2f5ff.appspot.com',
  messagingSenderId: '1024668328689',
  appId: '1:1024668328689:web:14bf78277d8d6768917f50',
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
