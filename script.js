//Conversion Formulas function
function tempConvert() {
  //first user answer from prompt
  var userInput1 = parseInt(prompt("What is the number value only of the temperature you would like to convert?"));

  // second user answer from second prompt
  var userInput2 = prompt("Do you want this value converted to Celsius of Fahrenheit? Please enter C or F");

  if (userInput2 === "C" || userInput2 === "c") {
    console.log(userInput1 + "\u00B0F equals " + (userInput1 - 32) * (5 / 9) + "\u00B0C");
  } else if (userInput2 === "F" || userInput2 === "f") {
    console.log(userInput1 + "\u00B0C equals " + (userInput1 * 9 / 5 + 32) + "\u00B0F");
  } else {
    console.log("Please enter the correct temperature type format (ex: C or F)");
  }
}

//run function

tempConvert();
