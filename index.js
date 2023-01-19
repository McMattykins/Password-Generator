const password1 = document.getElementById("password-1");
const password2 = document.getElementById("password-2");
const password3 = document.getElementById("password-3");
const password4 = document.getElementById("password-4");
let hasPassword = false

const passwords = [password1, password2, password3, password4];
//Creates an array of usable characters from 33 - 126 of ascii
let characters = [];
for (let i = 33; i <= 126; i++) {
  characters.push(String.fromCharCode(i));
}

//Generates a unique password for each field.
function generatePasswords() {
  for (let password of passwords) {
    password.textContent = generatePassword();
  }
  hasPassword = true;
}

//Generates a password of the desired length and returns it as a single string.
function generatePassword() {
  const passwordLength = document.getElementById("char-length").value; 
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
addEventListener("click", ({target}) => {
  const cb = navigator.clipboard;
  (target.className === "pw-button" && hasPassword) && cb.writeText(target.textContent).then(() => alert("Password copied"))
})