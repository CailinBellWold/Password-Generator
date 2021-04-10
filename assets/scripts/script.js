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
let ePWLength = (`OOPS! We generate passwords that are between 8 and 128 characters in length. Your entry fell outside of these parameters. \n\nPlease select "OK" to try again.`);
let ePWLengthBlank = (`OOPS! Your requested password length was blank/0 or wasn't a digit. \n\nPlease click the "Generate Password" button to try again.`);
let ePWCharTypeEmpty = (`OOPS! At least one character type must be selected in order to generate a password. \n\nPlease click the "Generate Password" button to try again.`);

// Password-Generating Data Sets
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numeric = 1234567890;
let special = "!#$%&'()*+,-./\:\;<=>?@[\\]^_`{|}~";

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

  // Validates UserInputLength Data and Sends Error and/or Restarts Loop Message if Invalid
  if (!userInputLength || userInputLength <= 7 || userInputLength >= 129) {
    if (!userInputLength) {
      alert(ePWLengthBlank);
      return;
    } else if (userInputLength <= 7 || userInputLength >= 129) {
      alert(ePWLength);
      return writePassword();
    };
    
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

  // Clears Password Value Between Password Generations if User Loops Through more than Once
  password = "";

  // Generates Character String Array (Comma-seperated String)
  for (var i = 0; i < userInputLength; i++) {
    computerChoice = userInputConcat[Math.floor(Math.random() * userInputConcat.length)];
    password += computerChoice;
  };

  // Assigns passwordText Variable to password ID in HTML and Passes the Password to the HTML Page
  document.querySelector("#password").value = password;
};