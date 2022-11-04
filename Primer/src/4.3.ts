function writeValue(val?: string){
  console.log(`Value: ${val ?? "Fallback value"}`);
}

writeValue("London");
writeValue();