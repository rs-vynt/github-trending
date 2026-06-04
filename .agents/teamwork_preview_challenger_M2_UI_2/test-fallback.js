const assert = require('assert');

function testFallback(descriptionVi, description) {
  return descriptionVi || description;
}

console.log("Empty descriptionVi:", testFallback("", "English description"));
console.log("Null descriptionVi:", testFallback(null, "English description"));
console.log("Undefined descriptionVi:", testFallback(undefined, "English description"));
console.log("Valid descriptionVi:", testFallback("Vietnamese description", "English description"));
