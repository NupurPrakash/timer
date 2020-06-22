let prompt = require("prompt-sync")();
let userInput = prompt("Enter time intervals:");
let userInputWithNoSpace = userInput.split(' ');

function timer(userInputWithNoSpace){
  if (userInputWithNoSpace > 0) {
    for (const timer of userInputWithNoSpace) {
      if (userInputWithNoSpace[timer] != NaN || userInputWithNoSpace[timer] > 0) {   
        setTimeout(() => {
          process.stdout.write("." + "\n");
        }, timer * 1000);
      }
    }
  }
}
timer(userInputWithNoSpace);
 