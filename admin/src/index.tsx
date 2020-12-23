import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './App';

var firebaseConfig = {
  apiKey: "AIzaSyDvV5BymKUwqV3SL39xHgODtUtYiiDmBeQ",
  authDomain: "mullin-57ea5.firebaseapp.com",
  databaseURL: "https://mullin-57ea5.firebaseio.com",
  projectId: "mullin-57ea5",
  storageBucket: "mullin-57ea5.appspot.com",
  messagingSenderId: "953695825719",
  appId: "1:953695825719:web:8779a20578f935a260f4b2",
  measurementId: "G-QW3M6Y8VYJ"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
