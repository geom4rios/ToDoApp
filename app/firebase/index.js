import firebase from 'firebase';

try {
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
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;