import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCATB9mgl92FWPJa2YFhCxm51OrpOvmeY0",
    authDomain: "bingeables-ba715.firebaseapp.com",
    projectId: "bingeables-ba715",
    storageBucket: "bingeables-ba715.appspot.com",
    messagingSenderId: "651114138187",
    appId: "1:651114138187:web:3cc398d99cc2208f951bce",
    measurementId: "G-0QWKJ7FKP3"
  };

// initialize firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const projectFirestore = getFirestore(app);

// initialize authentication services
const projectAuth = getAuth();

// timestamp - function to get server timestamp
const timestamp = projectFirestore.now

console.log('Firebase initialized');

export { projectFirestore, projectAuth, timestamp };
