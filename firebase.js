import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
     apiKey: "AIzaSyDlEnC5iYsovAKFoppZ8O_8DfdC04laIfY",
     authDomain: "instagramclone-react-nat-b027d.firebaseapp.com",
     projectId: "instagramclone-react-nat-b027d",
     storageBucket: "instagramclone-react-nat-b027d.appspot.com",
     messagingSenderId: "626591948962",
     appId: "1:626591948962:web:e990cd0597f4a4ebbd37fb",
     measurementId: "G-8PCQNGTMCY"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };

