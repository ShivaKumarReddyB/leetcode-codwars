function gcdOfStrings(str1, str2) {
  // If concatenating the strings in both orders doesn't give the same result, there's no common divisor
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  // Helper function to find the GCD of two numbers
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // Find the GCD of the lengths of the two strings
  const gcdLength = gcd(str1.length, str2.length);

  // The largest common divisor string is the prefix of str1 with length equal to the GCD
  return str1.substring(0, gcdLength);
}

// Example usage
console.log(gcdOfStrings("ABCABC", "ABC")); // Output: "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB")); // Output: "AB"
console.log(gcdOfStrings("LEET", "CODE")); // Output: ""
