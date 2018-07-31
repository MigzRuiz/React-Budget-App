const person = {
    name: "andrew",
    age: 24,
    location: {
        city: "sacramento",
        temp: 90
    }
};

//Destructuring
//const {name, age } = person;

//console.log(`${name} is ${age}`);

//const {city, temp: temperature } = person.location;

//console.log(`${city} is ${temp}`);

const book = {
    title: "harry potter",
    author: "jk rowling",
    publisher: {
        name: "tor"
    }
}

const {name: publisherName = "self"} = book.publisher;

console.log(publisherName);