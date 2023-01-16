// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
// variable storing length of password
  let length = parseInt(
    prompt("How many characters do you want your password to have?")
  )

  // Conditional returning an alert when the length of the password is not defined
  if(isNaN(length) === true){
    alert('Password length must be a number between 10 and 64')
    return;
  }

  // Conditional returning an alert when the password is too short
  if(length <= 10) {
    alert('Password length must be at least 10 characters')
    return;
  }

  // Conditional returning an alert when the password is too long
  else if(length > 64) {
    alert('Password length must be less than 65 characters')
    return;
  }

  // Prompts specifying password's character types 
  let hasSpecialCharacters = confirm(
    ("Would you like to include special characters?")
  )
  
  let hasNumericCharacters = confirm(
    ("Would you like to include mumbers?")
  )
  
  let hasLowerCasedCharacters = confirm(
    "Would you like to include lowercase characters?"
  )
  
  let hasUpperCasedCharacters = confirm(
    "Would you like to include uppercase characters?"
  )
  
  // Conditional returning an alert when no character type is selected
  if(hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false) {
      alert('You need to select at least one character type');
      return;
    }
 // variable storing keys and values
  let passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters,
  }
  console.log(passwordOptions); 
  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];
  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
  console.log(options);
  let result = []

  // Setting up guaranteed characters/rules for each scenario
  let possibleCharacter = []
  let guaranteedCharacter =[]

  if(options.hasSpecialCharacters) {
    possibleCharacter = possibleCharacter.concat(specialCharacters);
    guaranteedCharacter.push(getRandom(specialCharacters))
  }

  if(options.hasNumericCharacters) {
    possibleCharacter = possibleCharacter.concat(numericCharacters);
    guaranteedCharacter.push(getRandom(numericCharacters))
  }

  if(options.hasLowerCasedCharacters) {
    possibleCharacter = possibleCharacter.concat(lowerCasedCharacters);
    guaranteedCharacter.push(getRandom(lowerCasedCharacters))
  }

  if(options.hasUpperCasedCharacters) {
    possibleCharacter = possibleCharacter.concat(upperCasedCharacters);
    guaranteedCharacter.push(getRandom(upperCasedCharacters))
  }
  // Loop through the characters
  for (let i = 0; i < options.length; i++){
    var loop = getRandom(possibleCharacter);
    console.log(loop);
    result.push(loop);
  }
  // Add another loop to make the password more random by mixing the characters
  for (let i = 0; i < guaranteedCharacter.length; i++){
    result[i] = guaranteedCharacter[i];
  }
  console.log(result);

  //Return the values
  return result.join("")

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);