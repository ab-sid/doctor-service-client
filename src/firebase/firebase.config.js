// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAA3moeX_zCBILzp1N12NswxXNm_-Dx8Vo",
    authDomain: "doctor-service-review-1be7a.firebaseapp.com",
    projectId: "doctor-service-review-1be7a",
    storageBucket: "doctor-service-review-1be7a.appspot.com",
    messagingSenderId: "275031984212",
    appId: "1:275031984212:web:7ab83c8375e457313805c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;