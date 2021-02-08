import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCRC7sBOzKfWyKXrouFlfnqSYHx1h9xxqI',
  authDomain: 'crab-d187d.firebaseapp.com',
  projectId: 'crab-d187d',
  storageBucket: 'crab-d187d.appspot.com',
  messagingSenderId: '653628684354',
  appId: '1:653628684354:web:fef5f4c9fc1269c94e55db',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };
