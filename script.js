// Assignment Code
var generateBtn = document.querySelector("#generate");


var lower = "abcdefghijklmnopqrstuvwxyz".split();
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split();
var numeric = "1234567890".split();
var special = "!@#$%^&*()_-[]{}\|;:',./?+=".split();
var userSelection = "";


// Write password to the #password input
function writePassword() { 
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    

}

function generatePassword() {
    var output = "";
    var characterValue = prompt("Please put in a numeric value between 8 and 128 for your desired lenght password!");
  console.log(characterValue);
  if (isNaN(characterValue)) {
      alert("Please input a numeric value between 8 and 128!") 
      return generatePassword();   
  } else if (characterValue > 128 || characterValue < 8) {
      alert("Please input a number greater than or equal to 8 and less than or equal to 128!");
      return generatePassword();
  }   
  var lowerConfirm = confirm("Would you like to include lower case letters in your password?");
  var upperConfirm = confirm("Would you like to include upper case letters in your password?");
  var numericConfirm = confirm("Would you like to include numeric characters in your password?");
  var specialConfirm = confirm("Would you like to include special characters in your password?");
    
  if(!lowerConfirm && !upperConfirm && !numericConfirm && !specialConfirm) {
      alert("Please choose at least one character type!");
      return generatePassword();
  }

  if(lowerConfirm) {
      userSelection += lower
  } 
 if(upperConfirm) {
      userSelection += upper
  }
  if(numericConfirm) {
      userSelection += numeric
  }
  if(specialConfirm) {
      userSelection += special
  }
  for (var i = 0; i < characterValue; i++) {
    output += userSelection.charAt(Math.floor(Math.random() * userSelection.length)); 
  }
 
  console.log(output);
  return output;

  }




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);