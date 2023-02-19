function writeValue(val: string | null){
  console.log(`Value: ${val ?? "Fallback value"}`);
}

writeValue("London");
writeValue(null);