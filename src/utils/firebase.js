import firebase from "firebase"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCmqEgnU0I6UkQnkyFBTvPHgt1X079VQKo",
    authDomain: "expense-tracker-2021.firebaseapp.com",
    databaseURL: "https://expense-tracker-2021-default-rtdb.firebaseio.com",
    projectId: "expense-tracker-2021",
    storageBucket: "expense-tracker-2021.appspot.com",
    messagingSenderId: "589936842629",
    appId: "1:589936842629:web:a7b38b8a88218af1e0d6ec",
    measurementId: "G-KJN5KTV5F5"
  };

  export default firebase.initializeApp(firebaseConfig)