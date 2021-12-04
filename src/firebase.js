import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVb78Eam0hRJJHXgDt66cNmP6zv-b-NeU",
  authDomain: "clone-2d4e6.firebaseapp.com",
  projectId: "clone-2d4e6",
  storageBucket: "clone-2d4e6.appspot.com",
  messagingSenderId: "584854773213",
  appId: "1:584854773213:web:c4613ba23c28d012b02a34",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const google_provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithPopup(google_provider);
};
export const signOutWithGoogle = () => {
  auth.signOut();
};

export const db = firebase.firestore();

export default firebase;
