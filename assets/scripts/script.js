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
yes = ["Yes", "yes", "Y", "y", "Yar", "yar", "Yes please", "yes please", "Yup", "yup"]
no = ["No", "no", "N", "n", "No thanks", "no thanks", "Nope", "nope"]

//querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
var generateBtn = document.querySelector("#generate"); 

//When the button is clicked, start the process that will put the password in the box. The result of writePassword (when complete...(I keep getting all the steps displaying. Make a v for the final password.)), should appear there. 
generateBtn.addEventListener("click", writePassword); {
  document.getElementById("password").placeholder = securePassword;
};

function writePassword() {
  userInput = prompt("Please select a password length between 8 and 128 characters.", [8]);
    if (!userInput || userInput <= 7 || userInput >= 129) {
      alert("Please enter a whole number between 8 and 128.");
    } else {
      prompt("Should your password include lowercase letters?", ["Yes"]);
      if (!userInput || !yes.includes(userInput) && no.includes(userInput)) {
        alert(`Please enter "Yes" or "No"`);
      } else {
        prompt("Should your password include UPPERCASE letters?", ["Yes"]);
        if (!userInput || !yes.includes(userInput) && no.includes(userInput)) {
        alert(`Please enter "Yes" or "No"`);
          } else
          prompt("Should your password include special characters (!#$%)?", ["Yes"]);
          if (!userInput || !yes.includes(userInput) && no.includes(userInput)) {
          alert(`Please enter "Yes" or "No"`);
            } else
            alert("Done");
      }
    }
  }