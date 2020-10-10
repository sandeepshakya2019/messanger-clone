import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAsU0hil-l8_YfHxqL0ze7LTRGtQBs-kRQ",
    authDomain: "facebook-messanger-clone-be293.firebaseapp.com",
    databaseURL: "https://facebook-messanger-clone-be293.firebaseio.com",
    projectId: "facebook-messanger-clone-be293",
    storageBucket: "facebook-messanger-clone-be293.appspot.com",
    messagingSenderId: "289098097543",
    appId: "1:289098097543:web:b1e74c238909a3c9fe6922",
    measurementId: "G-Y7L447Q5G0"
})

const db = firebaseApp.firestore();

export default db;