// Import the functions you need from the SDKs you need
import  {initializeApp} from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// const firebaseConfig = {
//     apiKey:process.env.REACT_APP_apiKey,
//     authDomain:process.env.REACT_APP_authDomain ,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId:process.env.REACT_APP_appId
//   };

  const firebaseConfig = {
    apiKey: "AIzaSyB0Y4Pf5HBS0ZCiTEpKI6RlB22OslxL51U",
    authDomain:"chatapp-d9dd0.firebaseapp.com",
    projectId: "chatapp-d9dd0",
    storageBucket: "chatapp-d9dd0.appspot.com",
    messagingSenderId: "193428859362",
    appId:"1:193428859362:web:628aa98e30ab48e62831bb"
  };

// Initialize Firebase
const app =initializeApp(firebaseConfig)

export default getFirestore(app);
