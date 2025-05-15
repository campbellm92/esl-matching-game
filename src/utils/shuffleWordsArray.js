// Fisher-Yates Shuffle (ES6 version)
// https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

export function shuffleWordsArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
