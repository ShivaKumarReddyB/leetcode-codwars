const increasingTriplet = (nums) => {
  let miniOne = Number.MAX_SAFE_INTEGER,
    miniTwo = Number.MAX_SAFE_INTEGER;

  for (let num of nums) {
    if (num < miniOne) {
      miniOne = num;
    }
    if (num > miniOne) {
      miniTwo = Math.min(num, miniTwo);
    }
    if (num > miniTwo) {
      return true;
    }
  }
  return false;
};
console.log(increasingTriplet([5, 4, 3, 2, 1]));
