import * as firebase from "firebase/app";

const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);