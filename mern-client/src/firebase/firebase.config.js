// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEP79yeLJKrYVfLZPvE_mgEY6PI6Tp_Bk",//keep this on env folder so the security can be ensured.  
  authDomain: "mern-book-inventory-721c5.firebaseapp.com",
  projectId: "mern-book-inventory-721c5",
  storageBucket: "mern-book-inventory-721c5.firebasestorage.app",
  messagingSenderId: "38419781307",
  appId: "1:38419781307:web:714b6b3db4a6d208d97b9e"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;