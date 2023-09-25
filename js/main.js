// JSON: JavaScript Object Notation

// JSON is used to send and recieve data

// JSON is a text format that is completely language independant
// Meaning that JSON is used to send & recieve data in many languages,
// And not just in JavaScript

const myObj = {
  name: "Ismail",
  hobbies: ["eat", "sleep", "code"],
  hello: function () {
    console.log("Hello!");
  },
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);
console.log(sendJSON.name);

// When we recieve JSON from an Server

const recieveJSON = JSON.parse(sendJSON);
console.log(recieveJSON);
console.log(typeof recieveJSON);
