import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBfb2-RCZoZRavZKmjol18bTOJ2Ut9qvz8",
    authDomain: "mp3player-9f953.firebaseapp.com",
    databaseURL: "https://mp3player-9f953.firebaseio.com",
    projectId: "mp3player-9f953",
    storageBucket: "mp3player-9f953.appspot.com",
    messagingSenderId: "453715519468",
    appId: "1:453715519468:web:4f1735964d11c971a842c9",
    measurementId: "G-SL06NSTG4R"
  });

  const propio = firebaseConfig.firestore().collection('miplay');
  const visitas = firebaseConfig.firestore().collection('visita');
  const storage = firebaseConfig.storage();
  export {propio}
  export {visitas}
  export {storage}