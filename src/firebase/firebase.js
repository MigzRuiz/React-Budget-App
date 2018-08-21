import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyBAJcXAWr5nb6T0Ycda_WDmik4-lnx7na8",
    authDomain: "react-budget-app-75230.firebaseapp.com",
    databaseURL: "https://react-budget-app-75230.firebaseio.com",
    projectId: "react-budget-app-75230",
    storageBucket: "",
    messagingSenderId: "146292400670"
};

firebase.initializeApp(config);  
  
const database = firebase.database();

database.ref().set({
    name: "miguel",
    age: 23,
    isSingle: true,
    location: {
        city: "Sacramento",
        state: "CA"
    }
});

database.ref("attributes").set({
    height: "5'9",
    weight: "9 lbs"
})