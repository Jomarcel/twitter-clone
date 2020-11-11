import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAFz2m8gfXNuGT_z99kzNowVdmmcgudi1Y",
  authDomain: "twitter-clone-6ae19.firebaseapp.com",
  databaseURL: "https://twitter-clone-6ae19.firebaseio.com",
  projectId: "twitter-clone-6ae19",
  storageBucket: "twitter-clone-6ae19.appspot.com",
  messagingSenderId: "680330348291",
  appId: "1:680330348291:web:addbdae49948601874cb36",
  measurementId: "G-FNFDRPPJ6P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
