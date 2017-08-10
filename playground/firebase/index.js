import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: "todo-app-e0c63",
    storageBucket: process.env.STORAGE_BUCKET,
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






