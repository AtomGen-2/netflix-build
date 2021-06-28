import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC5Te_3ZZyQQxRHLsz78U02vDAwPh9gam4",
    authDomain: "netflix-build-f0796.firebaseapp.com",
    projectId: "netflix-build-f0796",
    storageBucket: "netflix-build-f0796.appspot.com",
    messagingSenderId: "325859801321",
    appId: "1:325859801321:web:861a061a45ece5f2b49878"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// firestore is the database
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
