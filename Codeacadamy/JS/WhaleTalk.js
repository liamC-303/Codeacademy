const input = "Hello my name is Liam Cawley";
const vowles = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  // console.log('this is my'+ inputIndex);
  for (let vowlesIndex = 0; vowlesIndex < vowles.length; vowlesIndex++) {
    //console.log('this is my vowles' + vowlesIndex)

    if (input[inputIndex] === vowles[vowlesIndex]) {
      if (input[inputIndex] === "e") {
        resultArray.push("ee");
      } else if (input[inputIndex] === "u") {
        resultArray.push("uu");
      } else {
        resultArray.push(input[inputIndex]);
      }
    }
  }
}
console.log(resultArray.join("").toUpperCase());
