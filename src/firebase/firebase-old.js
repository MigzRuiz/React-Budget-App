import * as firebase from "firebase";
const config = {
    apiKey: "AIzaSyDkAVoBE8iHt4lEDY0Lzc7qIZPUYXNerH8",
    authDomain: "react-budget-app-f1753.firebaseapp.com",
    databaseURL: "https://react-budget-app-f1753.firebaseio.com",
    projectId: "react-budget-app-f1753",
    storageBucket: "react-budget-app-f1753.appspot.com",
    messagingSenderId: "392300820281"
};

firebase.initializeApp(config);

firebase.database().ref().set({
    name: "Miguel",
    age: 23,
    isSingle: true,
    
});