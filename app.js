let randomNumber = Math.round(Math.random() * 100);

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuection() {
  readline.question("Give me num\n", (number) => {
    if (parseInt(number) == randomNumber) {
      console.log(`Your secret num is: ${number}!`);
      readline.close();
    } else if (parseInt(number) < randomNumber) {
        console.log("very small!");
        console.log("Try again!\n");
        askQuection();
    } else if (parseInt(number) > randomNumber) {
        console.log("very big!");
        console.log("Try again!");
        askQuection();
    }
    else {
      console.log("Try again!\n");
      askQuection();
    }
});
}

askQuection();
