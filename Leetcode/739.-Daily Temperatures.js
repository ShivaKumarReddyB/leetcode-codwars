const dailyTemperatures = (temperatures) => {
  const res = new Array(temperatures.length).fill(0);
  const stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    const t = temperatures[i];
    while (stack.length > 0 && t > stack[stack.length - 1][0]) {
      const stackInd = stack.pop();
      res[stackInd] = i - stackInd;
    }
    stack.push([t, i]);
  }
  return res;
};
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1, 1, 4, 2, 1, 1, 0, 0]
