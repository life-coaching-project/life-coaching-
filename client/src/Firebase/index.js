import {initializeApp} from "firebase/app";
import { getStorage } from "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA149St8lw4g0mxAvaOW-h70kx0ONI5BjI",
  authDomain: "image-a2b92.firebaseapp.com",
  projectId: "image-a2b92",
  storageBucket: "image-a2b92.appspot.com",
  messagingSenderId: "337778161691",
  appId: "1:337778161691:web:d29a34fd6b61662b6b60be",
  measurementId: "G-3NJXD3WYPW",
};
export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
