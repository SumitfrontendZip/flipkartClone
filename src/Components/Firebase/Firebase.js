import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAgnwfb1EURegDTfzj9lrSbE14kUrHmmm0",
    authDomain: "flipkartjs-779c9.firebaseapp.com",
    projectId: "flipkartjs-779c9",
    storageBucket: "flipkartjs-779c9.appspot.com",
    messagingSenderId: "325293195569",
    appId: "1:325293195569:web:cd33a6fc7568348ce13010",
    measurementId: "G-VQP3PL8FYF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);