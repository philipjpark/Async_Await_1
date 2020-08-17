const fs = require('fs');
const {promisify} = require('util');
const readFileAsync = promisify(fs.readFile);

const mostFrequentWord = (text) => {
  const words = text.toLowerCase().match(/[^_\W]+/g);
  const tally = {};
  let mostFrequentWord = null;

  words.forEach(word => {
    tally[word] = (tally[word] || 0) + 1 ;
    if(!tally[mostFrequentWord] || tally[word] > tally[mostFrequentWord])
      mostFrequentWord = word;
  });
  return mostFrequentWord;
}

const findPassword = async () => {

  const poem1 = await readFileAsync("poems/starting-poem.txt", "utf-8")
  console.log(mostFrequentWord(poem1))
  const poem2FileName = await readFileAsync ("poems/happy.txt", "utf-8")
  console.log(mostFrequentWord(poem2FileName))
  const poem3FileName = await readFileAsync ("poems/you.txt", "utf-8")
  console.log(mostFrequentWord(poem3FileName))
}

findPassword();

