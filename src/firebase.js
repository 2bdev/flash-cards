import firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBn0PYfo9cOMIBnXHUZd6s0D1OTQWnRTg0",
  authDomain: "flash-cards-54bc7.firebaseapp.com",
  databaseURL: "https://flash-cards-54bc7.firebaseio.com",
  projectId: "flash-cards-54bc7",
  storageBucket: "flash-cards-54bc7.appspot.com",
  messagingSenderId: "146987457748"
};
firebase.initializeApp(config);
export default firebase;
