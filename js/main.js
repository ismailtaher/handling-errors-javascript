// JavaScript Errors and Handling Errors

"use strict";

// Reference Error

/* variable = "Ismail";
console.log(variable);
 */

// Syntax Error

/* Object..create(); */

// Type Error

/* const name = "ismail";
name = "abdullah";
 */

// Try, Catch, Finally

const makeError = () => {
  let i = 1;
  while (i <= 5) {
    try {
      if (i % 2 !== 0) {
        throw new Error("Odd Number!");
      }
      console.log("Even Number");
    } catch (err) {
      console.error(err.stack);
    } finally {
      console.log("Finally...");
      i++;
    }
  }
};

makeError();

// Custom Error

/* function customError(message) {
  this.message = message;
  this.name = "custom error";
  this.stack = `${this.name}: ${this.message}`;
}
 */
