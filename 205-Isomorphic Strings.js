/*
   ## leet code 205. Isomorphic Strings
   https://leetcode.com/problems/isomorphic-strings/

 */

const isIsomorphic = (s, t) => {
  let charMapS = {};
  let charMapT = {};
  if (s.length === t.length) {
    for (let i = 0; i < s.length; i++) {
      if (charMapS[s[i]]) {
        if (charMapS[s[i]] !== t[i]) {
          console.log("s");
          return false;
        }
      } else {
        charMapS[s[i]] = t[i];
      }
      //   console.log(charMapS);
      if (charMapT[t[i]]) {
        if (charMapT[t[i]] !== s[i]) {
          console.log("t");
          return false;
        }
      } else {
        charMapT[t[i]] = s[i];
      }
    }
    return true;
  }

  return false;
};

console.log(isIsomorphic("egg", "add"));
// console.log(isIsomorphic("foo", "bar"));
// console.log(isIsomorphic("a", "a"));

// console.log(isIsomorphic("aaeaa", "uuxyy"));
