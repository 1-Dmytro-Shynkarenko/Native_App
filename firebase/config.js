import AsyncStorage from "@react-native-async-storage/async-storage";
import "firebase/storage";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFiovY_nVdt5M1V8NY1mbr7OsI0YVcLvc",
  authDomain: "my-project-2e0e4.firebaseapp.com",
  projectId: "my-project-2e0e4",
  storageBucket: "my-project-2e0e4.appspot.com",
  messagingSenderId: "96710262570",
  appId: "1:96710262570:web:06322c1f31a31f52f82853",
  measurementId: "G-QFRKEKG7DM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const fsbase = getFirestore(app);

