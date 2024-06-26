import { initializeApp } from "firebase/app";
 import { getAuth } from 'firebase/auth'
import firebase from 'firebase/app';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAgnwfb1EURegDTfzj9lrSbE14kUrHmmm0",
    authDomain: "flipkartjs-779c9.firebaseapp.com",
    projectId: "flipkartjs-779c9",
    storageBucket: "flipkartjs-779c9.appspot.com",
    messagingSenderId: "325293195569",
    appId: "1:325293195569:web:db024ffb5685d01fe13010",
    measurementId: "G-TJBXZ5NXG8"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
// export default app;

