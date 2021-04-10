// VARIABLE AND ARRAY SETS

// Input and Output
let userInputLength;
let userInputConcat;
let computerChoice;
let password = [];
let passwordText;

// Password Preferences
let askLength;
let askLowercase;
let askUppercase;
let askNumeric;
let askSpecial; 

// Instruction Text
let iPWStrong = ("Strong passwords include UPPER and lowercase letters, numerals and special characters. We will ask you a series of questions to determine which components you would like in your password. LET'S BEGIN!");
let iYesNo = ("OK for YES / Cancel for NO");

// Question Text
let qPWLength = ("Please select a password length between 8 and 128 characters.\n");
let qPWLower = ("Should your password include lowercase letters? \n");
let qPWUpper = ("Should your password include UPPERCASE letters? \n");
let qPWNumeric = ("Should your password include numerals (123)? \n");
let qPWSpecial = (`Should your password include special characters (!#$%)? \n`);

// Error Message Text
let ePWLength = (`Our password generator requires passwords to be between 8 and 128 characters. Please click the "Generate Password" button to try again.`);
let ePWCharTypeEmpty = (`At least one character type must be selected in order to generate a password. Please click the "Generate Password" button to try again.`);

// Password-Generating Data Sets
let lowercase = ["abcdefghijklmnopqrstuvwxyz"];
let uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
let numeric = [1234567890];
let special = ["!,#,$,%,&,',(,),*,+,,,-,.,/,\:,\;,<,=,>,?,@,[,\\,],^,_,`,{,|,},~"];

// Confirm
let confirmLower;
let confirmUpper;
let confirmNumeric;
let confirmSpecial;

// Assigns Variable to ID "generate"
let generateBtn = document.querySelector("#generate");

//ACTION BEGINS HERE

// Clicking Generate Button Initializes writePassword Function and Placeholder Text Appears. 
generateBtn.addEventListener("click", writePassword); 
document.getElementById("password").placeholder = "Your Password Will Appear Here";

// Queries the User about their Preferences and Writes Password
function writePassword() {

  // Alerts User to Strong Password Qualities and Upcoming Question Series
  alert(iPWStrong);  

  // Asks User for Preferred Passsword Length and Sets Default at 8
  userInputLength = prompt(qPWLength, [8]);

  // Converts UserInput from a String to a Number
  userInputLength = parseInt(userInputLength, 10);

  // Validates UserInputLength Data and Sends Error Message if Invalid
  if (!userInputLength || userInputLength <= 7 || userInputLength >= 129 || userInputLength.value == NaN) {
    alert(ePWLength); 
    return;

  // Asks User Their Character-Type Preferences 
  } else {
    confirmLower = confirm(qPWLower + iYesNo);
    confirmUpper = confirm(qPWUpper + iYesNo);
    confirmNumeric = confirm(qPWNumeric + iYesNo);
    confirmSpecial = confirm(qPWSpecial + iYesNo);
  };

  // Concatenates User Character-Type Responses into Single Array
  userInputConcat = [];
  userInputConcat += (confirmLower ? lowercase : "");
  userInputConcat += (confirmUpper ? uppercase : "");
  userInputConcat += (confirmNumeric ? numeric : "");
  userInputConcat += (confirmSpecial ? special : "");

  // Sends Error Message if Character-Type Array is Empty
  if (userInputConcat == "") {
    alert(ePWCharTypeEmpty);
    return;
  };

  // Generates Character String Array (Comma-seperated String)
  for (var i = 0; i < userInputLength; i++) {
    computerChoice = userInputConcat[Math.floor(Math.random() * userInputConcat.length)];
    password.push(computerChoice);
  };

  // Joins Array into Single String
  password = (password.join(""));

  // Assigns passwordText Variable to password ID in HTML
  passwordText = document.querySelector("#password");

  // Passes the Password to the HTML Page
  passwordText.value = password;
};