/*
leet code https://leetcode.com/problems/is-subsequence/
 */

const isSubsequence = (s, t) => {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      j++;
      i++;
    } else {
      j++;
    }
  }
  return i === s.length; // as the  i  length
};
/* we  can use  index to search trough  strings   and check with length  to say that is t */
console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));

console.log(isSubsequence("acb", "ahbgdc"));
