// import commands.js using ES2015 syntax
import "./commands";

//disable Cypress Uncaught Assertion Error
Cypress.on("uncaught:exception", () => {
  return false;
});
