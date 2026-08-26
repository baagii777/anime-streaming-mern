import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCegJVpT9INmMwsh1iG9OUHgpvuzFGLGCY",
  authDomain: "diplom-db9c6.firebaseapp.com",
  projectId: "diplom-db9c6",
  storageBucket: "diplom-db9c6.appspot.com",
  messagingSenderId: "614722954824",
  appId: "1:614722954824:web:1cb037cccfdc5540019a7d",
  measurementId: "G-SGF0CC74EK",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
