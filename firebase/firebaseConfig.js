// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmtNYS7i5xKAMpSTiJHv8op0xyNPnQfIo",
  authDomain: "test-g-3.firebaseapp.com",
  projectId: "test-g-3",
  storageBucket: "test-g-3.firebasestorage.app",
  messagingSenderId: "358543027538",
  appId: "1:358543027538:web:7fcc003154dc6fad535e8b",
  measurementId: "G-Z7KXKZDKEZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }

export default app