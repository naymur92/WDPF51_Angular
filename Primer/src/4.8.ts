function getUKCapital(): string{
  return "London";
}
function writeCity(f: () => string){
  console.log(`City: ${f()}`);
}

writeCity(getUKCapital);
writeCity(() => 'Paris');