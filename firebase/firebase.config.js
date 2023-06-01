// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyB80W37RKi15GZ917hCYPBIre-l5BFdWQE',
  authDomain: 'studentapp-5bbf5.firebaseapp.com',
  projectId: 'studentapp-5bbf5',
  storageBucket: 'studentapp-5bbf5.appspot.com',
  messagingSenderId: '926283022222',
  appId: '1:926283022222:web:a7242f130c084ebc6eaedf',
  measurementId: 'G-3NHMDZ7FXP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
