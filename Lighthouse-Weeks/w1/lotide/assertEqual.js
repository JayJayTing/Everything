const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("These two arguemnts are the same!");
  } else {
    console.log("These two arguments are NOT the same!");
  }
    
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);