function writeValue(val: string, ...extraInfo: string[]){
  console.log(`Value: ${val}, Extras: ${extraInfo}`);
}
writeValue("London", "Raining", "Cold");
writeValue("Paris", "Sunny");
writeValue("New York")