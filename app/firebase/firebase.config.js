// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage, ref } from "firebase/storage";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// let firebase_app =
//   getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// export const auth = getAuth(firebase_app);
export const auth = getAuth(app);

// const appTwo = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service   export const storage =...???
// const storage = getStorage(app);

// Create a storage reference from our storage service
// const storageRef = ref(storage);

// export default firebase_app;
// export { storage };
