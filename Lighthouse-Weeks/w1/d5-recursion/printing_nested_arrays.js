function printItems(array) {
    for (item of array) {
      console.log(item);
    }
  }
  
  //const array = ["😎", "💩", "🤗", "😼", "😂"];
  const array = ["😎", ["💩", "🤗"], "😼", "😂"];
  printItems(array);