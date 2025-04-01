const validPalindrome = (s) => {
  let left = 0,
    right = s.length - 1;
  const isAlphabet = (c) => /^[a-zA-Z0-9]+$/.test(c);
  while (left < right) {
    while (left < right && !isAlphabet(s[left])) left++;
    while (left < right && !isAlphabet(s[right])) right--;
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

// Test cases

console.log(validPalindrome("Was it a car or a cat I saw?"));
