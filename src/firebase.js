import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAuxb5rUfkR2H4DhHrmo95pHY3BUicDK0g",
  authDomain: "messangerclone-4fa93.firebaseapp.com",
  projectId: "messangerclone-4fa93",
  storageBucket: "messangerclone-4fa93.appspot.com",
  messagingSenderId: "116567230151",
  appId: "1:116567230151:web:0ad4233e0647aeefee20e2",
});

const db = firebaseApp.firestore();

export default db;
