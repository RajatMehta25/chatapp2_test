import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyAqqUNxzj7wvT3U1d-oYPQdcKN0XBCNHy8",
  authDomain: "chat-app-d374a.firebaseapp.com",
  databaseURL: "https://chat-app-d374a-default-rtdb.firebaseio.com",
  projectId: "chat-app-d374a",
  storageBucket: "chat-app-d374a.appspot.com",
  messagingSenderId: "698185577574",
  appId: "1:698185577574:web:582d56961d3b21eb0429a7"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
