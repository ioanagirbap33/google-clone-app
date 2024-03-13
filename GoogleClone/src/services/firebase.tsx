import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqWIhnDoquVfTJ8F8JL2Vw3vDCsAT2wnM",
  authDomain: "clone-af4b1.firebaseapp.com",
  projectId: "clone-af4b1",
  storageBucket: "clone-af4b1.appspot.com",
  messagingSenderId: "175766240513",
  appId: "1:175766240513:web:5a8bea76c797ef071eaf00",
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;

export const auth = getAuth(app);

// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const name = result.user.displayName;
//       const email = result.user.email;
//       const profilePic = result.user.photoURL;
//       localStorage.setItem("name", name!);
//       localStorage.setItem("email", email!);
//       localStorage.setItem("profilePic", profilePic!);

//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//};
