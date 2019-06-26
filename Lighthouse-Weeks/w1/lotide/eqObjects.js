const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`These two arguemnts are the same: ${actual} vs ${expected}`);
    } else {
      console.log(`These two arguemnts are NOT the same: ${actual} vs ${expected}`);
    }
      
  };

  const eqArrays = function(array1, array2)
  {
    if(array1.length === array2.length)
    {
      for (var i = 0; i < array1.length; i ++)
      {
        if(array1[i] !== array2[i])
        {
          return false;
        }
      }
  
    }
    else
    {
      return false;
    }
  
  return true;
  
  
  }

const eqObjects = function(object1, object2) {
    if(Object.keys(object1).length === Object.keys(object2).length)
    {
        for(var key in object1)
        {
            if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
                return eqArrays(object1[key], object2[key]);
            } else {
                if(object1[key] !== object2[key])
                {   
                    return false;
                }
            }
            
        }
        return true;
    }   else{
        return false;
    }

};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

