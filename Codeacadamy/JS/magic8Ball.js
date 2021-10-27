let userName = "Liam";

userName ? console.log(`Hello, ${userName}`) : console.log("Hello");
let userQuestion = "will it rain";

console.log(`The user asked ${userQuestion}`);

let ranomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

switch (ranomNumber) {
  case 0:
    eightBall = "it is certain";
    break;

  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}

console.log(eightBall);
