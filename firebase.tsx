import * as firebase from 'firebase';
import "firebase/database";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCQwiP65BU2dcT05larVRmBqM2-EicX7Ms",
  authDomain: "scheduler-37685.firebaseapp.com",
  databaseURL: "https://scheduler-37685-default-rtdb.firebaseio.com",
  projectId: "scheduler-37685",
  storageBucket: "scheduler-37685.appspot.com",
  messagingSenderId: "145379487978",
  appId: "1:145379487978:web:d2394d02293794fbcb6793",
  measurementId: "G-MD0VQD7K0J"
};

firebase.initializeApp(firebaseConfig);

export { firebase };
