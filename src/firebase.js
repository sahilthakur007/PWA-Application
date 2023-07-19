// Import the functions you need from the SDKs you need
// import firebase from 'firebase'
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDD9HWwqRxNATiN77z6iYWuhxopeVBMqg8",
    authDomain: "pwa-application-96322.firebaseapp.com",
    projectId: "pwa-application-96322",
    storageBucket: "pwa-application-96322.appspot.com",
    messagingSenderId: "899651814032",
    appId: "1:899651814032:web:77eb7e0456f1fa7f554e15",
    measurementId: "G-1R1TTNYQ0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app