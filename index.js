var readlineSync = require("readline-sync");
var chalk = require('chalk');

var score = 0;

var user = readlineSync.question(chalk.bold.yellowBright("what's Your Name? "));

console.log(chalk.underline.bold.bgBlue(user));

var message = readlineSync.question(chalk.bold.yellowBright("welcome "+ user+ " to the Quize Are u Ready type yes "));
console.log(chalk.underline.bold.bgBlue(message + " Lets Go"));
console.log("----------");

var highscore = [{
 name:chalk.bold.bgMagentaBright("Akshay:"),
 score:10
 },
 {
   name:chalk.bgMagentaBright("Om:"),
   score:9
 }
]

//function for question
function play(question,answer){
var userAnswer = readlineSync.question(question);
var chalk = require('chalk');

if(userAnswer.toUpperCase()  === answer.toUpperCase()){
  console.log(chalk.underline.bold.bgMagenta("You Are Wright "));
  score++;
}else{
  console.log(chalk.bold.bgCyan("You Are Wrong"));
}
console.log(chalk.bold.yellowBright("Your current score "+ score));
console.log("----------------");
}
//array of question
 var questions = [
 {
  question: chalk.bold.bgRed("Who made Captain America’s shield?"),
  answer: "Howard Stark"
},
{
  question:chalk.bold.bgRed("Unlike the comics, who created Ultron in Avengers: Age of Ultron? "),
  answer: "Tonystark"
},
{
  question: chalk.bold.bgRed("What is Black Widow’s real name? "),
  answer: "Natasha"
},
{
  question:chalk.bold.bgRed("What is Captain America’s shield made out of? "),
  answer: "Vibranium"
},
{
  question: chalk.bold.bgRed("How many Infinity Stones are there?"),
  answer: "6"
},
{
  question:chalk.bold.bgRed("What is the name of Black Panther’s home country? "),
  answer: "Wakanda"
},
{
  question: chalk.bold.bgRed("Who killed Tony Stark’s parents? "),
  answer: " Winter Soldieri"
},
{
  question:chalk.bold.bgRed("Before becoming Vision, what is the name of Iron Man’s A.I. butler? "),
  answer: "Jarvis"
},
{
  question: chalk.bold.bgRed("What was the final film in Marvel Studios’ “Phase Three”? "),
  answer: " SpiderMan"
},
{
  question:chalk.bold.bgRed("spidermans real Name? "),
  answer: "Peter Parker"
}

];

//looping the question
for(i=0; i<questions.length; i++){
  var result = questions[i];
  play(result.question,result.answer);
}
console.log("_______________________");

console.log(chalk.underline.bold.bgYellow("YAY !, Your Score Is:" + score));
console.log("-----------------------");
console.log(chalk.bold.bgGreenBright("Highest Score Holders:"));


