let count: number | undefined | null = 100;
if(count != null && count != undefined){
  let resutl1: string = count.toFixed(2);
  console.log(`Result 1: ${resutl1}`);
}
let result2: string | undefined = count?.toFixed(2);
console.log(`Result 2: ${result2}`);