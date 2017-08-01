import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAeNKCzLbcXVyAAHS8vH3SgMI344ttDJus",
    authDomain: "todo-app-e0c63.firebaseapp.com",
    databaseURL: "https://todo-app-e0c63.firebaseio.com",
    projectId: "todo-app-e0c63",
    storageBucket: "todo-app-e0c63.appspot.com",
    messagingSenderId: "371378498101"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Karmonjo',
        age: 27
    },

});






