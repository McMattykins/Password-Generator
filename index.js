let passwords = [];
let passwordLength = 16; //Can be changed to adjust the length of passwords. Will add to the UI later.

password1 = document.getElementById("password-1");
password2 = document.getElementById("password-2");
password3 = document.getElementById("password-3");
password4 = document.getElementById("password-4");

//Creates an array of usable characters from 33 - 126 of ascii
let characters = [];
for (let i = 33; i <= 126; i++) {
  characters.push(String.fromCharCode(i));
}

//Generates a unique password for each field.
function generatePasswords() {
  password1.textContent = generatePassword();
  password2.textContent = generatePassword();
  password3.textContent = generatePassword();
  password4.textContent = generatePassword();
}

//Generates a password of the desired length and returns it as a single string.
function generatePassword() {
  let password = [];
  for (i = 0; i < passwordLength; i++) {
    password.push(selectRandom());
  }
  return password.join("");
}

//Returns a random character from the characters list.
function selectRandom() {
  randomCharacter = Math.floor(Math.random() * characters.length);
  return characters[randomCharacter];
}

//Add eventListener for the passwords to copy to clipboard on click.
