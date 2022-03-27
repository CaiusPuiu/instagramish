import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCgyXogvrmVWgACnTeyNjTY4JS7nDhHQsM",
    authDomain: "instagramish-2ce2d.firebaseapp.com",
    projectId: "instagramish-2ce2d",
    storageBucket: "instagramish-2ce2d.appspot.com",
    messagingSenderId: "58070045947",
    appId: "1:58070045947:web:fb87ef8551b8ffc1a0cc5e"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };