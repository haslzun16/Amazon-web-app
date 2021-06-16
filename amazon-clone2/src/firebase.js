import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCbZH7iJKpmIoPmfdBwmO90lpAymuG0Cko",
  authDomain: "clone-6a45d.firebaseapp.com",
  projectId: "clone-6a45d",
  storageBucket: "clone-6a45d.appspot.com",
  messagingSenderId: "673371642021",
  appId: "1:673371642021:web:bc1c48d8f8b9b8f85ad54c",
  measurementId: "G-CX5TWWZPFJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
