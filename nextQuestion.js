let image = "";
let imgArray = ["fiji", "finland", "france", "guyana", "haiti", "iceland", "ireland", "japan", "kazakhstan", "kuwait", "laos", "libya", "madagascar", "malta", "micronesia", "moroccoa", "namibia", "nicaragua", "oman", "pakistan", "paraguay", "qatar", "romania", "saotome", "sierraleone", "somalia", "stkitts", "sudan", "tajikistan", "trinidad", "uganda", "uruguay", "vanuatu", "yemen", "zambia"];
pickImages()
function pickImages() {
    let randomIndex = Math.floor(Math.random() * imgArray.length);
    let randomImage = imgArray[randomIndex];
    image = "imgs/" + randomImage + ".jpg";
    document.getElementById("image").src = image;
}

function checkAnswer() {
    let guessInput = document.getElementById("guess");
    let guess = guessInput.value.toLowerCase();
    let correctAnswer = image.split("/")[1].split(".")[0]; // Extracting country name from images
    let resultElement = document.getElementById("result");
//following code clears the input box after answering the question
    if (guess === correctAnswer) {
        resultElement.textContent = "Congratulations! Your answer is correct."; // Clear the result message
        pickImages(); 
        guessInput.value = ""; 
    } else {
        resultElement.textContent = "Incorrect! The correct answer is: " + correctAnswer + ". Please enter the correct answer to continue.";
        guessInput.value = ""; 
    }
}

function goToNextPage(nextPage)
{
  window.location.href = nextPage;
  location.replace(nextPage);
}
