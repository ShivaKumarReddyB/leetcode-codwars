/*
* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
Don't forget the space after the closing parentheses!
* */

function createPhoneNumber(numbers) {
  let phoneFormat = {
    0: "(",
    4: ")",
    5: " ",
    9: "-",
  };
  for (const phoneFormatKey in phoneFormat) {
    numbers.splice(phoneFormatKey, 0, phoneFormat[phoneFormatKey]);
  }

  return numbers.join("");
}

// console.log(["(", 1, 2, 3, ")", " ", 4, 5, 6, "-", 7, 8, 9, 0].join(""));

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
