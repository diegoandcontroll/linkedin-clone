import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAq1raMHkzL1K4wMmSBTKVZ3rc3ZDGP2fo",
  authDomain: "linkedin-5b498.firebaseapp.com",
  projectId: "linkedin-5b498",
  storageBucket: "linkedin-5b498.appspot.com",
  messagingSenderId: "623442042838",
  appId: "1:623442042838:web:025d08f1ad1d9c21eece77",
  measurementId: "G-VTHNVKL2R7"
};
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth()
export { db, auth };