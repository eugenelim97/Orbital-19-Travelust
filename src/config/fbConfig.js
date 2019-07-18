import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAKmxPSJJyji50ST4kTbgfQ84VdvtqeANc",
    authDomain: "orbital-travelust.firebaseapp.com",
    databaseURL: "https://orbital-travelust.firebaseio.com",
    projectId: "orbital-travelust",
    storageBucket: "",
    messagingSenderId: "392080181910",
    appId: "1:392080181910:web:1ad766b244f2adce"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.firestore().settings({ timestampsInSnapshots: true });
  
  export default firebase