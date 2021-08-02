// Assignment Code
var generateBtn = document.querySelector("#generate");
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;

// Write password to the #password input
function writePassword() {
  
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

function lenght() {
    var characterValue = prompt("Please put in a numeric value between 8 and 128 for your desired lenght password!");
  var characterValuedenied = ("abcdefghijklmnopqrstuvwxyz!@#$%^&*()<>?/;':[]{}\| ").split(" ");
  console.log(characterValue);
  if (characterValuedenied.includes(characterValue)) {
      alert("Please input a numeric value between 8 and 128!") 
      return writePassword();   
    } 
    else if (characterValue > 128) {
      alert("Please choose a value between 8 and 128!");
      return writePassword();
    }
 else if(characterValue < 8) {
      alert("Please choose a value greater then or equal to 8 but less than or equal 128");
      return Password();
  } 

    generatePassword(); 
} 

    function generatePassword() {
    
  var lowerConfirm = confirm("Would you like to include lower case letters in your password?");
  var UpperConfirm = confirm("Would you like to include upper case letters in your password?");
  var numericConfirm = confirm("Would you like to include numeric characters in your password?");
  var specialConfirm = confirm("Would you like to include special characters in your password?");
    
  if(!lowerConfirm && !UpperConfirm && !numericConfirm && !specialConfirm) {
      alert("Please choose at least one character type!");
      return generatePassword();
  }

    }


// Add event listener to generate button
generateBtn.addEventListener("click", length);