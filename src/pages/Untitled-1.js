// The Coding Problem: "The Array Compactor"

// Task: Write a function compactArray that takes an array containing various data types and returns a new array with all falsy values removed. Falsy values include false, 0, "", null, undefined, and NaN

// Input
const data = [0, "hello", "", 42, null, undefined, "world", false];

// Your Code Here
function compactArray(arr) {
  // Use the .filter() method

  return arr.filter((a) => {
    if(a != null){
      return;
    }
    else if(a != 0)
    {
      return;
    }
    else if(a != false)
    {
      return;
    }
    else{a != 0}
    return a;
  });
}

// Expected Output: ["hello", 42, "world"]