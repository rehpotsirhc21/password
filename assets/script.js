// Assignment code here
// ask for password legnth
var charSet = [];
var passwordLength; 



//upper or lower case letters
var letters = () => {
  var alphaChar = prompt(
    'would you like your letters to be lower case, upper case or both? type "1" for lower, type "2" for upper or type "3" for both.'
  );
  alphaChar = parseInt(alphaChar);
  if (!alphaChar) {
    alert("You must select an option. Please try again");
  } else if (alphaChar === 1) {
    charSet.push(
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    );
  } else if (alphaChar === 2) {
    charSet.push(
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    );
  } else if (alphaChar === 3) {
    charSet.push(
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    );
  } else {
    alert("you have entered an invalid value. Please try again! .");
    letters();
  }
};
// should numbers be inlcuded
var numbers = () => {
  var numericChar = prompt(
    'Would you like to include numeric characters? Type "Y" for yes or "N" for no.'
  );
  numericChar = numericChar.toLowerCase();
  if (!numericChar) {
    alert("You did not choose a valid option. Please try again");
    numbers();
  } else if (numericChar === "y") {
    charSet.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
    
  } else if (numericChar === "n") {
    alert(`You chose not to include numbers`);
  } else {
    alert("You did not choose a valid option, please try again!");
    numbers();
  }
};

var special = () => {
  var specialChar = prompt(
    'Would you like to include special characters? Type "Y" for yes or "N" for no.'
  );
  specialChar = specialChar.toLowerCase();
  if (!specialChar) {
    alert("You did not choose a valid option. Please try again");
    special();
  } else if (specialChar === "y") {
    charSet.push(
      "!",
      "#",
      "%",
      "$",
      "&",
      "*",
      "+",
      ">",
      "<",
      "@",
      "=",
      "^",
      "|",
      "()",
      "_"
    );
  } else if (specialChar === "n") {
      alert(`You chose not to include special characters`)
  } else {
    alert("You did not choose a valid option. Please try again!");
    special();
  }
};

var length = () => {
  passwordLength = prompt(
    "Welcome to Random Paswword Generater! How long would you like your password to be? Please provide a whole number between 8 and 128."
  );
  passwordLength = parseInt(passwordLength);
  if (!passwordLength) {
    alert(
      "You did not provide any information or did not enter a whole number. Please try again!"
    );
    length();
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert(
      "You have chosen a number that does not meet the criteria. Please try again!"
    );
    length();
  }
};

var generatePassword = () => {
  length();
  letters();
  numbers();
  special();

  var pswd = [];
  var random;
  for (let i = 0; i < passwordLength; i++) {
    random = Math.floor(Math.random() * charSet.length);
    pswd.push(charSet[random]);
    var password = pswd.join("");
  }

  console.log(pswd);
  alert(`Your password is: ${password}`);
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   
   
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
