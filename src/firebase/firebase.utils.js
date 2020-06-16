import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAAPYFTX9IqdhckDPt3Htg915SAv88ZY3A",
    authDomain: "crown-clothing-db-1bfef.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-1bfef.firebaseio.com",
    projectId: "crown-clothing-db-1bfef",
    storageBucket: "crown-clothing-db-1bfef.appspot.com",
    messagingSenderId: "456077881621",
    appId: "1:456077881621:web:2c3810db899beb8ced391c",
    measurementId: "G-K2G94PP02V"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google Authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
