import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import App from './App';
import reportWebVitals from './reportWebVitals';


const firebaseConfig = {
  apiKey: "AIzaSyDMBXe6uw8SI2YCpOeXEIaw8Z5MVDQWPHU",
  authDomain: "lautarorocha-af0ec.firebaseapp.com",
  projectId: "lautarorocha-af0ec",
  storageBucket: "lautarorocha-af0ec.appspot.com",
  messagingSenderId: "955636152042",
  appId: "1:955636152042:web:2a1a1cc13d4bc1b4d88993",
  measurementId: "G-EJR02VB4XP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
