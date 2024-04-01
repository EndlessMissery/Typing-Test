const userInput = document.getElementById("quote-input");
let mistakes = 0;

// Disable the user input initially
userInput.disabled = true;

//Logic for comparing input words with quote
userInput.addEventListener("input", () => {
  let quoteChars = document.querySelectorAll(".quote-chars");
  //Create an arrat from received span tags
  quoteChars = Array.from(quoteChars);
  //array of user input characters
  let userInputChars = userInput.value.split("");
  //loop through each character in quote
  quoteChars.forEach((char, index) => {
    //Check if char(quote character) = userInputChars[index](input character)
    if (char.innerText == userInputChars[index]) {
      char.classList.add("success");
    }
    //If user hasn't entered anything or backspaced
    else if (userInputChars[index] == null) {
      //Remove class if any
      if (char.classList.contains("success")) {
        char.classList.remove("success");
      } else {
        char.classList.remove("fail");
      }
    }
    //If user enter wrong character
    else {
      //Checks if we alreasy have added fail class
      if (!char.classList.contains("fail")) {
        //increment and display mistakes
        mistakes += 1;
        char.classList.add("fail");
      }
      document.getElementById("mistakes").innerText = mistakes;
    }
    //Returns true if all the characters are entered correctly
    let check = quoteChars.every((element) => {
      return element.classList.contains("success");
    });
    //End test if all characters are correct
    if (check) {
      displayResult();
    }
  });
});