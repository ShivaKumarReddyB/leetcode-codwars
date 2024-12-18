const kidsWithCandies = (candies, extraCandies) => {
  const maxCandies = Math.max(...candies); // Find the current max candies
  const result = [];

  for (let i = 0; i < candies.length; i++) {
    // Check if adding extraCandies makes candies[i] greater than or equal to maxCandies
    result.push(candies[i] + extraCandies >= maxCandies);
  }

  return result;
};
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
