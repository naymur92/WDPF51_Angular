function myFunction(param: number | string) {
  if (typeof param == 'number') {
    let numberResult = param.toFixed(2);
    console.log("My result: " + numberResult);
  } else {
    let stringResult = param + 100;
    console.log("My result: " + stringResult);
  }
}
myFunction(1);
myFunction('London');
