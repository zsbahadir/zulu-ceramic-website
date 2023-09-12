// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage, ref } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOyc76K0ZxbxDASXSX9pjsH0OnH8sUHMo",
  authDomain: "zulu-ceramic-website.firebaseapp.com",
  projectId: "zulu-ceramic-website",
  storageBucket: "zulu-ceramic-website.appspot.com",
  messagingSenderId: "747836770620",
  appId: "1:747836770620:web:df2c3589008938def0f639",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service   export const storage =...???
const storage = getStorage(app);

// Create a storage reference from our storage service
const storageRef = ref(storage);

export { storage };
