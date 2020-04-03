import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDB9-gXF3zeVF0e9Vq8Iv9jCoDQ3LH5X9w",
  authDomain: "techstore-db.firebaseapp.com",
  databaseURL: "https://techstore-db.firebaseio.com",
  projectId: "techstore-db",
  storageBucket: "techstore-db.appspot.com",
  messagingSenderId: "1038643669823",
  appId: "1:1038643669823:web:e2578b5a306321c523818a",
  measurementId: "G-RR8KYES298"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // If this snapshot doesn't exist...
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    // We create one here.
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
      // If there is an error we catch it here.
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  // This function will always return out userRef
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
