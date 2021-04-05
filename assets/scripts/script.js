// Assignment Code

//Set up variables for everything we will ask the user about their password preferences.
var askLength;
var askLowercase;
var askUppercase;
var askNumeric;
var askSpecial;

//Set up arrays for potential answers
//Do we have to set up every number from 8-128? Look for how to do this.
/*Clipped from GH: const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const letter = letters[0]; // "A"
const randomLetter = letters[Math.floor(Math.random() * letters.length)]; // random letter ;)
var alpha = ["a", ]
https://www.samanthaming.com/tidbits/83-4-ways-to-convert-string-to-character-array/
*/

lowercase = ["abcdefghijklmnopqrstuvwxyz"]
uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
numeric = ["1234567890"]
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

//querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
var generateBtn = document.querySelector("#generate"); 

// Add event listener to generate button
//generateBtn.addEventListener("click", function() { prompt("Please select a password length between 8 and 128 characters.")}); //Works

generateBtn.addEventListener("click", function writePassword() { prompt("Please select a password length between 8 and 128 characters.", [8])});

/*----Cuttoff. If we comment out here down, pop-up will still work */
function writePassword() {
  if (USER INPUT > 8 && USER INPUT < 129){
      alert(woot);
  } else {
    alert("Please enter a whole number between 8 and 128.")
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Write password to the #password input (THIS IS THE ORIGINAL. KEEP FOR REFERENCE.)
/*function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}*/



//An If else if to go through questions. Will need pop-ups/alerts (what are they called?) and some way to validate input before moving on.
function passwordGenerator() {

};