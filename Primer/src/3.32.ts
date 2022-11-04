let firstName = "Naymur";

// else if condition
if(firstName == "Naymur"){
  console.log("firstName is Naymur");
} else if(firstName == "Kamrul"){
  console.log("firstName is Kamrul");
} else{
  console.log("firstName is neither Naymur or Kamrul");
}

// switch case
switch(firstName){
  case "Naymur":
    console.log("firstName is Naymur");
    break;
  case "Kamrul":
    console.log("firstName is Kamrul");
    break;
  default:
    console.log("firstName is neither Naymur or Kamrul");
    break;
}