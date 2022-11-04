function composeString(val: string): string{
  return `Composed string: ${val}`;
}
function writeValue(val?: string){
  console.log(composeString(val ?? 'Fallback value'));
}

writeValue("London");
writeValue();