// Assignment Code

//Variables for all PW preferences.
let askLength;
let askLowercase;
let askUppercase;
let askNumeric;
let askSpecial; 

//Variables for Input and Output
let userInputLength;
let userInputConcat;
let computerChoice;
let generatePassword;
let password = [];

//Variables for questions (could convert to array and push lower case letters, Upper,etc. Not that many questions, though...)
//QUESTION: How to concatinate with /n/r between strings? Have input spaces to appear properly, for now.
let qPWStrong = ("Strong passwords include UPPER and lowercase letters, numerals and special characters. We will ask you a series of questions to determine which components you would like in your password. LET'S BEGIN!")
let qPWLength = ("Please select a password length between 8 and 128 characters.    ")
let qPWLower = ("Should your password include lowercase letters?                                  ")
let qPWUpper = ("Should your password include UPPERCASE letters?                               ")
let qPWNumeric = ("Should your password include numerals (123)?                                      ")
let qPWSpecial = (`Should your password include special characters (!#$%)?                     `)
let qInstruct = ("OK for YES / Cancel for NO")
let aYes = ("Yes")

//Variables for Error Messages
let qPWLengthError = ("ERROR: Please enter a whole number between 8 and 128.")
let qPWLengthFinalError = (`Our password generator requires passwords to be between 8 and 128 characters. Please click the "Generate Password" button to try again.`)
let qPWAllFalseError = (`ERROR: At least one character type must be selected in order to generate a password. Please click the "Generate Password" button to try again.`)

//Arrays for password-generating data sets
let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

let confirmLower;
let confirmUpper;
let confirmNumeric;
let confirmSpecial;

//Arrays for confirm and potential userInputConcats

//All 4 dataset option
let concat0123 = lowercase.concat(uppercase, numeric, special); 
//All 3 dataset options
let concat012 = lowercase.concat(uppercase, numeric);
let concat013 = lowercase.concat(uppercase, special);
let concat023 = lowercase.concat(numeric, special);
let concat123 = uppercase.concat(numeric, special);
//All 2 dataset options
let concat01 = lowercase.concat(uppercase);
let concat02 = lowercase.concat(numeric);
let concat03 = lowercase.concat(special);
let concat12 = uppercase.concat(numeric);
let concat13 = uppercase.concat(special);
let concat23 = numeric.concat(special);

//Looks for Generate ID in HTML doc, gives it a varaiable
var generateBtn = document.querySelector("#generate"); // Original Text

//When the button is clicked, start the process that will put the password in the box. The result of writePassword (when complete...(I keep getting all the steps displaying. Make a v for the final password.)), should appear there. 
generateBtn.addEventListener("click", writePassword); 
document.getElementById("password").placeholder = password;

function writePassword() {
  alert(qPWStrong);  
  userInputLength = prompt(qPWLength, [8]);
  userInputLength = parseInt(userInputLength, 10);
    if (!userInputLength || userInputLength <= 7 || userInputLength >= 129) {
      alert(qPWLengthFinalError); 
    } else {
      confirmLower = confirm((qPWLower + qInstruct), [aYes]);
      console.log(confirmLower); // True
      confirmUpper = confirm((qPWUpper + qInstruct), [aYes]);
      console.log(confirmUpper); // True
      confirmNumeric = confirm((qPWNumeric + qInstruct), [aYes]);
      console.log(confirmNumeric); // True
      confirmSpecial = confirm((qPWSpecial + qInstruct), [aYes]);
      console.log(confirmSpecial); // True
    };

    let confirmArray = [confirmLower, confirmUpper, confirmNumeric, confirmSpecial];

    if (!confirmArray[0] && !confirmArray[1] && !confirmArray[2] && !confirmArray[3]) {
      alert(qPWAllFalseError);
    } else if (confirmArray[0] && confirmArray[1] && confirmArray[2] && confirmArray[3]) {
      userInputConcat = concat0123;
    } else if (confirmArray[0] && confirmArray[1] && confirmArray[2]) {
      userInputConcat = concat012;
    } else if (confirmArray[0] && confirmArray[1] && confirmArray[3]) {
      userInputConcat = concat013;
    } else if (confirmArray[0] && confirmArray[2] && confirmArray[3]) {
      userInputConcat = concat023;
    } else if (confirmArray[1] && confirmArray[2] && confirmArray[3]) {
      userInputConcat = concat123;
    } else if (confirmArray[0] && confirmArray[1]) {
      userInputConcat = concat01;
    } else if (confirmArray[0] && confirmArray[2]) {
      userInputConcat = concat02;
    } else if (confirmArray[0] && confirmArray[3]) {
      userInputConcat = concat03;
    } else if (confirmArray[1] && confirmArray[2]) {
      userInputConcat = concat12;
    } else if (confirmArray[1] && confirmArray[3]) {
      userInputConcat = concat13;
    } else if (confirmArray[2] && confirmArray[3]) {
      userInputConcat = concat23;
    };

      for (var i = 0; i < userInputLength; i++) {
        computerChoice = userInputConcat[Math.floor(Math.random() * userInputConcat.length)];
        password.push(computerChoice);
        console.log(password);
      };

  password = (password.join(""));
  password.toString(); //QUESTION: How to convert the password array to a string? This doesn't seem to work.
  console.log(password);
  password.typeof();
};

/*
// Assignment Code
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/

  //Second chance: how to include after first password length entered incorrect? USE A WHILE LOOP ONCE EVERYTHING WORKS
      //if (!userInput || userInput <= 7 || userInput >= 129) {
    //    alert(qPWLengthFinalError);