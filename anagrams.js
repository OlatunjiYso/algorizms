// Given two strings, write a function to determine if the first string is an anagram of the other.
// An Anagram is a word or phrase formed by arranging the letters of another word.

// STEPS:
// Recieve the two inputs.
// Form a frequency counter object with one of the words.
// Loop through the other word, making sure the occurence of each letter matches the count on the frequency counter.

const anagram = (word1, word2) => {

    let freqCounter1 = {};
    let freqCounter2 = {};

    for(let letter of word1) {
        freqCounter1[letter] = ( freqCounter1[letter] || 0 ) + 1;
    }

    for(let letter of word2) {
        freqCounter2[letter] = ( freqCounter2[letter] || 0 ) + 1;
    }
    console.log(freqCounter1);
    console.log(freqCounter2);

    for(let key in freqCounter1) {
        if(freqCounter1[key] !== freqCounter2[key]) return false;
    }

    return true;
}


// Why not just check and remove an occuring items?

const anagram_ = ( word1='', word2) => {
if (word1.length !== word2.length) return false;
let lookup = {};
for( letter of word1) {
  lookup[letter] = (lookup[letter] || 0) + 1;
}
for(letter of word2 ) {
  if(!lookup[letter]) return false;
  console.log('remove', letter)
  console.log(lookup)
  lookup[letter] -=1;
  console.log(lookup);
}
return true
}
