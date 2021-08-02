// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(event) {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
  event.preventDefault();
  var characterValue = prompt("Please put in a numeric value between 8 and 128 for your desired lenght password!");
  var characterValuedenied = ("abcdefghijklmnopqrstuvwxyz!@#$%^&*()<>?/;':[]{}\| ").split(" ");
  console.log(characterValue);
  if (characterValuedenied.includes(characterValue)) {
      alert("Please input a numeric value between 8 and 128!")    
    } 
    else if (characterValue > 128) {
      alert("Please choose a value between 8 and 128!");
    }
 else if(characterValue < 8) {
      alert("Please choose a value greater then or equal to 8 but less than or equal 128");
  } 


  var lowerConfirm = confirm("Would you like to include lower case letters in your password?");
  var UpperConfirm = confirm("Would you like to include upper case letters in your password?");
  var numericConfirm = confirm("Would you like to include numeric characters in your password?");
  var specialCOnfirm = confirm("Would you like to include special characters in your password?");

//   passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);