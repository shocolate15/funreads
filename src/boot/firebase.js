// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Add the Firebase services that you want to use
// import "firebase/auth";
// import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4GmlrCVaXQyaIciZbfKfbQPKI1jgU42s",
  authDomain: "kids-book-acff9.firebaseapp.com",
  projectId: "kids-book-acff9",
  storageBucket: "kids-book-acff9.appspot.com",
  messagingSenderId: "445458300137",
  appId: "1:445458300137:web:5446069f38f8192c77c478",
};

// // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// let db = firebase.firestore();
const db = firebaseApp.firestore();
const auth = firebase.auth();

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

export { firebase, auth, db };
