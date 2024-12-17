const camelcase = (s) => {
  let wordCount = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "A" && s[i] <= "Z") {
      wordCount++;
    }
  }

  return wordCount;
};

console.log(camelcase("saveChangesInTheEditor"));
