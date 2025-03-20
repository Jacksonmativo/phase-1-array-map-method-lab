const tutorials = [ 
  "what does the this keyword mean?",
  "what is the constructor oo pattern?",
  "implementing blockchain web api",
  "the test driven development workflow",
  "what is nan and how can we check for it",
  "what is the difference between stoppropagation and preventDefault?",
  "immutable state and pure functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?"
];

function titleCased() {
  return tutorials.map((tutorial) => {
    return tutorial
      .split(" ")
      .map((word) => {
        // Special words that should keep exact casing
        const specialWords = {
          "oo": "OO",
          "api": "API",
          "nan": "NaN",
          "jsonp": "JSONP",
          "stoppropagation": "StopPropagation",
          "preventdefault": "PreventDefault",
        };

        // Convert lowercase words that match specialWords
        if (Object.prototype.hasOwnProperty.call(specialWords, word.toLowerCase())) {
          return specialWords[word.toLowerCase()];
        }

        // Explicitly handle "constructor" to avoid prototype pollution issues
        if (word.toLowerCase() === "constructor") {
          return "Constructor";
        }

        // Otherwise, capitalize first letter
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  });
}

console.log(titleCased());
