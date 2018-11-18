import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAf0xR5_zbW7AH4pwf4XLcVKQPyaJzyCDA",
    authDomain: "myplan-e9176.firebaseapp.com",
    databaseURL: "https://myplan-e9176.firebaseio.com",
    projectId: "myplan-e9176",
    storageBucket: "myplan-e9176.appspot.com",
    messagingSenderId: "376595977620"
};

firebase.initializeApp(config);
firebase.firestore().settings({
    timestampsInSnapshots: true
});

export default firebase;