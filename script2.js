/* Used toFixed method on this script, and set a
variable for the console.log outputs.  Index.html is not
currently pointing to this script */

//Conversion Formulas function
function tempConvert() {
  //first user answer from prompt
  var userInput1 = parseInt(prompt("What is the number value only of the temperature you would like to convert?"));

  // second user answer from second prompt
  var userInput2 = prompt("Do you want this value converted to Celsius of Fahrenheit? Please enter C or F");

  var CtoF = userInput1 + "\u00B0F equals " + ((userInput1 - 32) * (5 / 9)).toFixed(3) + "\u00B0C";
  var FtoC = userInput1 + "\u00B0C equals " + (userInput1 * 9 / 5 + 32).toFixed(3) + "\u00B0F";

  if (userInput2 === "C" || userInput2 === "c") {
    console.log(CtoF);
  } else if (userInput2 === "F" || userInput2 === "f") {
    console.log(FtoC);
  } else {
    console.log("Please enter the correct temperature type format (ex: C or F)");
  }
}

//run function

tempConvert();
