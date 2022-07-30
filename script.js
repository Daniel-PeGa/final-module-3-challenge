// Assignment code here
var alphabetCAP = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
var alphabetMin = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specChar = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",","-", ".", "/",
 ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
 var totalChar = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var charNumb = prompt("How long do you want it?? (min: 8, max: 128)");
  if (charNumb <= 8) { 
    alert("Nah man, get some more safety");
    {return;}
  } else if (charNumb > 128) {
    alert("Dang bro, who are you protecting yourself from? the FBI? What're you hiding?!");
    {return;}
  } 

  var lowCase = confirm("Do you want it to have lower case characters??");
  var yeCap = confirm("Do you want Capital letter characters??");
  var nums = confirm("Do you want it to have numbers??");
  var speciChars = confirm("Do you want it to have special characters??");

  if (lowCase) {
    totalChar = totalChar.concat(alphabetMin);
  } 
  if (yeCap) {
    totalChar = totalChar.concat(alphabetCAP);
  }
  if (nums) {
    totalChar = totalChar.concat(numbers);
  }
  if (speciChars) {
    totalChar = totalChar.concat(specChar);
  }
 
  let finalPassword = ""
  for (let i = 0; i < charNumb; i++) {
    let rng =[Math.floor(Math.random() * totalChar.length)];
    finalPassword = finalPassword + totalChar[rng];
  }
  return finalPassword;
};
  
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}