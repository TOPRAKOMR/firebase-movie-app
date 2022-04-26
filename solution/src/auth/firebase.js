import { initializeApp } from 'firebase/app';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut} from "firebase/auth"

const firebaseConfig = {

  apiKey: "AIzaSyCu0UMkTCUR3oNc2NQYBTzBWdDEXydT-pw",
  authDomain: "movie-app-react-aac3d.firebaseapp.com",
  projectId: "movie-app-react-aac3d",
  storageBucket: "movie-app-react-aac3d.appspot.com",
  messagingSenderId: "407381089563",
  appId: "1:407381089563:web:9365b790921215329107be"
  };

const app = initializeApp(firebaseConfig);

const auth =getAuth(app)

export const createUser = async(email,password,nagivate)=>{
  try{
    let userCredential=await createUserWithEmailAndPassword(
      auth, 
      email, 
      password);
    console.log(userCredential);
    nagivate("/");
  }
  catch(err){
    alert(err.message)
  }
  
}

export const signIn = async(email, password,nagivate)=>{
try{
  let userCredential=await signInWithEmailAndPassword(
    auth,
    email, 
    password);
  console.log(userCredential);
  nagivate("/");
}
catch(err){
  alert(err.message)
}
}

export const logOut =()=>{
  signOut(auth);
  alert("Logged out successfuly")
}

