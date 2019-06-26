const findWaldo = function(names, found) {
    for (let i = 0; i < names.length; i++) {
      if (names[i] === "Waldo") {
        found(i);   // execute callback
      }
    }
  }
  
  const actionWhenFound = function(index) {
    console.log(`Found him at index ${index}`);
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);