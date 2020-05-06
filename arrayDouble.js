// This Function receives two arrays and check if the square of each items in arr1 is contained in arr2.
// Also, the frequency of the items in array one should be matched with the respsective squares of items in arr2.


/**
 *
 * Naive Solution
 *
 */

// STEPS:
// Validate Inputs
// Mantain a value called stillOkay init to true.
// Once a value doesn't have its square in second array; stillOkay=> false,
// Stop looping and return false.
// Tackle frequency condition

const same = (arr1, arr2) => {
  if (!validInputs(arr1, arr2)) return false;
  for (num of arr1) {
    let numSquare = Math.pow(num, 2);
    if (!arr2.includes(numSquare)) return false;
    arr2 = removeOneOccurence(numSquare, arr2);
  }
  return true;
};

const validInputs = (arr1, arr2) => {
  if (!arr1 || !arr2) return false;
  if (arr1.length !== arr2.length) return false;
  return true;
};

const removeOneOccurence = (val, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      arr.splice(i, 1);
      break;
    }
  }
  return arr;
};

//console.log(same([1, 2, 1], [4, 1, 1]));









/**
 *
 * An Optimized solution ( Frequency Counter pattern )
 *
 */

 // STEPS:
// Keep track of what is contained in both arrays using an object by generating  a frequency counter for each.
// Check the square of each keys in obj1 and be sure that it is present as a key in obj2
// Check the value of each key in obj1 and be sure that the square of the value, which is a key in obj2 both have  same value

function optimisedSame(arr1, arr2) {

    if (!validInputs(arr1, arr2)) return false;
    let freqCounter1 = {};
    let freqCounter2 = {};
    for( let num of arr1 ) {
        freqCounter1[num] = (freqCounter1[num] || 0) + 1;
    }
    for( let num of arr2 ) {
        freqCounter2[num] = (freqCounter2[num] || 0) + 1;
    }
    for( let key in freqCounter1 ) {
        if(! ( key ** 2 in freqCounter2) ) return false;
        if (freqCounter1[key] !== freqCounter2[key ** 2]) return false;
    }

    return true;
}


console.log(optimisedSame([1, 2, 1], [4, 1, 1]));
