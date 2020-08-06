import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDLKIc-Lb10PmYtKYXOSe-PVxrNxbg1qow",
  authDomain: "instagram-clone-74978.firebaseapp.com",
  databaseURL: "https://instagram-clone-74978.firebaseio.com",
  projectId: "instagram-clone-74978",
  storageBucket: "instagram-clone-74978.appspot.com",
  messagingSenderId: "999484040672",
  appId: "1:999484040672:web:c8f51cb973a5e55c687785",
  measurementId: "G-0C2WJJ4DX7",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
