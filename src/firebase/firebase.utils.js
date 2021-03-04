import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDPpEXSmldycNAnc6o29oii1UzEE_TPNL8",
    authDomain: "alfa-commerce.firebaseapp.com",
    projectId: "alfa-commerce",
    storageBucket: "alfa-commerce.appspot.com",
    messagingSenderId: "473819250424",
    appId: "1:473819250424:web:8138d9c9c451e6eaf3050d",
    measurementId: "G-QYHJHT9PRR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
