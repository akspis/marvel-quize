var readlineSync = require("readline-sync");
var chalk = require('chalk');

var score = 0;

var user = readlineSync.question(chalk.bold.yellowBright("what's Your Name? "));

console.log(chalk.underline.bold.bgBlue("welcome" + user));

var message = readlineSync.question(chalk.bold.yellowBright("welcome "+ user+ " to the Quize Are u Ready? (Yes/No) "));

if(message === "yes"){
console.log(chalk.underline.bold.bgBlue("Lets go " + user));
}else{
  console.log(chalk.underline.bold.bgCyan("its ok if you dont want to play quize " + user));
  process.exit(1)
}

console.log("----------");


//function for question
function play(question,answer){
var userAnswer = readlineSync.question(question);
var chalk = require('chalk');

if(userAnswer.toUpperCase()  === answer.toUpperCase()){
  console.log(chalk.underline.bold.bgMagenta("You Are Right "));
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
  question: chalk.bold.bgRed("Who made Captain America’s shield?")+("\n1.howard stark")+("\n2.tony stark")+("\n3.captain america ")+"\n",
  answer: "Howard Stark"
},
{
  question:chalk.bold.bgRed("Unlike the comics, who created Ultron in Avengers: Age of Ultron? ")+("\n1.hulk")+("\n2.ironman")+("\n3.vision ")+"\n",
  answer: "ironman"
},
{
  question: chalk.bold.bgRed("What is Black Widow’s real name? ")+("\n1.natasha")+("\n2.priti")+("\n3.arya ")+"\n",
  answer: "Natasha"
},
{
  question:chalk.bold.bgRed("What is Captain America’s shield made out of? ")+("\n1.gold")+("\n2.silver")+("\n3.vibranium ")+"\n",
  answer: "Vibranium"
},
{
  question: chalk.bold.bgRed("How many Infinity Stones are there?")+("\n1.4")+("\n2.6")+("\n3.7 ")+"\n",
  answer: "6"
},
{
  question:chalk.bold.bgRed("What is the name of Black Panther’s home country? ")+("\n1.china")+("\n2.africa")+("\n3.wakanda ")+"\n",
  answer: "Wakanda"
},
{
  question: chalk.bold.bgRed("Who killed Tony Stark’s parents? ")+("\n1.Winter Soldier")+("\n2.hulk")+("\n3.falcon ")+"\n",
  answer: " Winter Soldieri"
},
{
  question:chalk.bold.bgRed("Before becoming Vision, what is the name of Iron Man’s A.I. butler? ")+("\n1.jarvis")+("\n2.vision")+("\n3.Aii ")+"\n",
  answer: "Jarvis"
},
{
  question: chalk.bold.bgRed("What was the final film in Marvel Studios’ “Phase Three”? ")+("\n1.endgame")+("\n2.spiderman")+("\n3.blackwidow ")+"\n",
  answer: " SpiderMan"
},
{
  question:chalk.bold.bgRed("spidermans real Name? ")+("\n1.ben parker")+("\n2.peter parker")+("\n3.flash ")+"\n",
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


