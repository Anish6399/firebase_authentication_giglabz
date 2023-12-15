import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyD15dhur15I-dUaIrBZebtDPkYfsj0bXMY",
  authDomain: "giglabz.firebaseapp.com",
  projectId: "giglabz",
  storageBucket: "giglabz.appspot.com",
  messagingSenderId: "92003363330",
  appId: "1:92003363330:web:92b3db62f93c79a0dc551b"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();



export { auth, googleAuthProvider, facebookAuthProvider }










// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/auth'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyADKGbJF30BU4wLRUeGuc3kfbZ8c-lny30",
//   authDomain: "task-f65ea.firebaseapp.com",
//   projectId: "task-f65ea",
//   storageBucket: "task-f65ea.appspot.com",
//   messagingSenderId: "1095737031723",
//   appId: "1:1095737031723:web:4dafe306d2778c5ec9be6e"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth()
// export default app