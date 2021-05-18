import firebase from "firebase" 

const firebaseConfig = {
  apiKey: "AIzaSyAoaVdMYdNjdXoB7rxuBnpJpOd5o8Sfg5w",
  authDomain: "disney-clone-e10ef.firebaseapp.com",
  projectId: "disney-clone-e10ef",
  storageBucket: "disney-clone-e10ef.appspot.com",
  messagingSenderId: "282012857146",
  appId: "1:282012857146:web:e6e3786498c1d929db1603",
  measurementId: "G-E7L479BM16",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
 