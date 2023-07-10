// Assignment Code
// This bit of code makes the user internface
// Be aware that will need to check that the program picks at least 1 of the user specified characters. 

var generateBtn = document.querySelector("#generate"); // listening variable used at end of starter code

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // need to write this function
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button, write all the new stuff below here. 
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
// create variables that will be used to store and later return the password
  let passLength = 0;
  let capChoice = false;
  let lowChoice = false;
  let numChoice = false;
  let symChoice = false; 
  // Variable for storing password
  let newPass = "";
  // Create list of constants to be choosen from for the password
const capLetList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowLetList = capLetList.toLowerCase();
const numList = "0123456789";
const symList = "!#$%&'\"()*+,-./:;<=>?@[]^_`{|}~";

// ask user for parameters using prompt(), can use confirm() which returns yes or no, return bool. Possibly use if else statements to check for password length
  
passLength = prompt("How long should the password be, choose a number between 8 and 128", 0);
    passLength = parseInt(passLength);
    if (passLength < 8 || passLength > 128){
      return("You must pick a password length between 8 and 128 characters.");
    } else if (isNaN(passLength)) {
      return("You must choose a valid numerical value between 8 and 128.");
    } else{
      lowChoice = confirm("Would you like to use lower case letters?");
      capChoice = confirm("Would you like to use capital letters?");
      numChoice = confirm("Would you like numbers in your password?");
      symChoice = confirm("Would you like to use symbols?");
    }
    // Fixes case in which no options are chosen which caused webpage to become unresponsive
  while (!lowChoice && !capChoice && !numChoice && !symChoice){
    alert("You must choose at least one option for a password to be generated!");
    return("Error: No Characters To Generate Password From!")
  }
    // create random character generation functions that can be called on by the main code
    function generateCapital() {
      return capLetList[Math.floor(Math.random() * capLetList.length)];
    }
    function generateLower() {
      return lowLetList[Math.floor(Math.random() * lowLetList.length)];
    }
    function generateNum() {
      return numList[Math.floor(Math.random() * numList.length)];
    }
    function generateSym() { 
      return symList[Math.floor(Math.random() * symList.length)];
    }

  // Create something to at least get one of each character choosen
  if (lowChoice === true){
    newPass += generateLower();
  }
  if (capChoice === true){
    newPass += generateCapital();
  }
  if (numChoice === true){
    newPass += generateNum();
  }
  if (symChoice === true){
    newPass += generateSym();
  }
  //Creates new variable to better control password length to it matches input length. 
  let newPassLength = passLength - newPass.length;
  // Create the rest of the ~~owl~~ password
  for (let i = 0; i < newPassLength;){
    if (lowChoice === true && i < newPassLength){
      newPass += generateLower();
      i++;
    }
    if (capChoice === true && i < newPassLength){
      newPass += generateCapital();
      i++;
    }
    if (numChoice === true && i < newPassLength){
      newPass += generateNum();
      i++;5
    }
    if (symChoice === true && i < newPassLength){
      newPass += generateSym();
      i++;
    }
  }
  console.log(newPass);
  // Randomize the string to better obfuscate the beginning 1-4 character generation. Used code demostrated as linked in the README.
   //function shuffle(pass) {
    let shufflePass = newPass.split(""); //splits sptring into array
    console.log(shufflePass);
    //sort() method can have a compare function few into it that can be positive or negative. Math.random() and the 0.5 add chaos into the sort method on eeach implementation.
    shufflePass.sort(function() {  
      return 0.5 - Math.random();
    });
    console.log(shufflePass);
    newPass = shufflePass.join("");  //join array back together. 
    //return pass;
  //}
  //newPass = shuffle(newPass);

    //stuff for testing to make sure everything is working before buidling the next part
    // var capTest = generateCapital();
    // var lowTest = generateLower();
    // var numTest = generateNum();
    // var symTest = generateSym();
    // console.log(passLength);
    // console.log(capChoice);
    // console.log(lowChoice);
    // console.log(numChoice);
    // console.log(symChoice);
    // console.log(capTest);
    // console.log(lowTest);
    // console.log(numTest);
    // console.log(symTest);
    // console.log(newPassLength);
    // console.log(newPass);
    // console.log(newPass.length);


  // return the generated password here
  return newPass;
}