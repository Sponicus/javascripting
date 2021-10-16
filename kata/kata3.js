const numberOfVowels = function(data) {
  let sum = 0;
  dataArrays = Array.from(data)
  dataArrays.forEach(function(dataArray) {
    if( dataArray === 'a' || dataArray === 'e' || dataArray === 'i' || dataArray === 'o' || dataArray === 'u' ) {
      sum += 1
    }
  });
  return sum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));