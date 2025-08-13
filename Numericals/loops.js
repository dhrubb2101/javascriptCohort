// there are two paramters - totalGifts and friends
// so there are three scenarios 
// one where totalGifts and friends are equal or total gifts are more and another one is
// where totalGifts is less than friends and return total gifts

//loop challenge #2
// You just need to implement the countApples function
function countApples(apples) {
  let appleCount
  for(let count = 0; count <= apples; count++){
    appleCount= count
  }
  return appleCount
}

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const apples = parseInt(input); // Parse input as a number
  // Call our function
  const result = countApples(apples);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
