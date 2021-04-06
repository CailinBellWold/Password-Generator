// Assignment Code

//Variables for all preferences.
let askLength;
let askLowercase;
let askUppercase;
let askNumeric;
let askSpecial;
let securePassword;
let userInput;

//Arrays for answers (outside of null or empty)
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
securePassword = "writePassword function output"

//querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
var generateBtn = document.querySelector("#generate"); 

//When the button is clicked, start the process that will put the password in the box. The result of writePassword (when complete...(I keep getting all the steps displaying. Make a v for the final password.)), should appear there. 
generateBtn.addEventListener("click", writePassword); {
  document.getElementById("password").placeholder = securePassword;
};

//----Cuttoff. If we comment out here down, pop-up will still work
function writePassword() {
  userInput = prompt("Please select a password length between 8 and 128 characters.", [8]);
    if (!userInput || userInput <= 7 || userInput >= 129) {
      alert("Please enter a whole number between 8 and 128.");
    } else {
      alert("This worked.");
    };
  };
/*

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Write password to the #password input (THIS IS THE ORIGINAL. KEEP FOR REFERENCE.)
/*function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}*/



//An If else if to go through questions. Will need pop-ups/alerts (what are they called?) and some way to validate input before moving on.
function passwordGenerator() {

};