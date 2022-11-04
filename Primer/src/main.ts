let myArray: (number | string | boolean)[] = [100, "Naymur", true];
let otherArray = [...myArray, 200, "Kamrul", true];

// for(let i = 0; i< myArray.length; i++){
//   console.log(`Index ${i}: ${myArray[i]}`);
// }

// console.log("----");

otherArray.forEach((value, index) => console.log(`Index ${index}: ${value}`));