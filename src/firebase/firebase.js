import * as firebase from "firebase";



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