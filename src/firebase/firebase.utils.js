import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfiguration = {
    apiKey: "AIzaSyBRT6bmmAn9zrMQ36AhwqSr-Sd10U4K0NM",
    authDomain: "crown-db-4ebcf.firebaseapp.com",
    projectId: "crown-db-4ebcf",
    storageBucket: "crown-db-4ebcf.appspot.com",
    messagingSenderId: "1044230965511",
    appId: "1:1044230965511:web:1fc76a6fe911a04577dda2",
    measurementId: "G-TKX8XDDQ8Q"
};
firebase.initializeApp(firebaseConfiguration);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
