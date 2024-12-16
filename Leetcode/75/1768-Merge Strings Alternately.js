/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const mergedStringLength = word1.length + word2.length;
  let mergedString = "";
  for (let i = 0; i < mergedStringLength; i++) {
    if (word1.length > i) {
      mergedString += word1[i];
    }

    if (word2.length > i) {
      mergedString += word2[i];
    }
  }

  return mergedString;
};

console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("ab", "pqrs"));
