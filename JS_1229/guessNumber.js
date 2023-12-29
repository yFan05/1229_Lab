// Global variables
let secretNumber = generateRandomNumber();

// 4. Function to generate a random number between 1 and 10
function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Function to check the user's guess
function checkGuess() {

  // Local variable
  let userGuess = document.getElementById("userGuess").value;
  let resultElement = document.getElementById("result");

  // 5. Here should be an if-else statement.
  if(userGuess == secretNumber){
    resultElement.textContent = "Congratulations! You guessed the correct number!";
    showImageAndPlaySound("picture2.JPEG", "music2.mp3");
    secretNumber = generateRandomNumber();
  } else {
    resultElement.textContent = "Sorry, try again!";
    showImageAndPlaySound("picture1.JPEG", "music1.mp3");
  }
  
  document.getElementById("userGuess").value = "";
}

// Function to show image and play sound
function showImageAndPlaySound(imageSource, soundSource) {
  let imageElement = document.createElement("img");
  imageElement.src = imageSource;

  let soundElement = document.createElement("audio");
  soundElement.src = soundSource;
  soundElement.autoplay = true;

  let resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";
  resultContainer.appendChild(imageElement);
  resultContainer.appendChild(soundElement);
}
