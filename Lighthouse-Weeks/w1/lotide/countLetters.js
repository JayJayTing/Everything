const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`These two arguemnts are the same: ${actual} vs ${expected}`);
    } else {
      console.log(`These two arguemnts are NOT the same: ${actual} vs ${expected}`);
    }

}



const countLetters = function(phrase)
{
  
  
  const countStats = {};
  for(var letter of phrase.split(''))
  {
    
      countStats[letter] = 0;
    
  }

  for(var a in countStats)
  {
    
    for(var b of phrase.split(''))
    {
      if(a === b)
      {
        countStats[a] ++;
      }
    }
    
  }



return countStats;





}
console.log(countLetters("abcdefghijklmnopqrstuvwxyzabcde"));
