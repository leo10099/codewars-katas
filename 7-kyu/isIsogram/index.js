/*
  Title:
    Isograms

  Description:
    An isogram is a word that has no repeating letters, consecutive or non-consecutive.
    Implement a function that determines whether a string that contains only letters is an isogram.
    Assume the empty string is an isogram. Ignore letter case.

  Examples:
    isIsogram( "Dermatoglyphics" ) == true
    isIsogram( "aba" ) == false
    isIsogram( "moOse" ) == false // -- ignore letter case

  Kata Link:
    https://www.codewars.com/kata/isograms

  Discuss Link:
    https://www.codewars.com/kata/isograms/discuss

  Solutions Link:
    https://www.codewars.com/kata/isograms/solutions
*/

// Long Solution
function isIsogram(str) {
  if (str.length === 0) return true

  const strLowerCase = str
    .split('')
    .map(char => char.toLowerCase())
    .join('')
  const set = new Set(strLowerCase)

  return set.size === str.length
}

// Function Export
module.exports = isIsogram
