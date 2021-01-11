import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCJU3sKo7OdJMMfn1UcFPri_6Ft72hEn-w",
  authDomain: "parikalan-d78a5.firebaseapp.com",
  projectId: "parikalan-d78a5",
  storageBucket: "parikalan-d78a5.appspot.com",
  messagingSenderId: "403759856867",
  appId: "1:403759856867:web:d7bbbd946977d1192e99d6",
  measurementId: "G-7T52EZ8JM2",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
