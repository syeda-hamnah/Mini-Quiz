//Small quiz//

let question1 = 'Do variable names can contain spaces?';
let answer1 = 'no';

let question2 = 'In camelCase name begins in lower case, If theres more than one word in the name, each word gets an initial cap';
let answer2 = 'yes';

let question3 = "'Sunflower' & 'sunflower' are same variable name in Javascript."
let answer3 = 'no';

let question4 = "'alert' could be use as a variable name.";
let answer4 = 'no';

let question5 = 'A variable name can contain dollar signs?';
let answer5 = 'yes';

let score = 0;
let totalScore = 5;

alert("Answer the following Javascript variable questions in 'yes' or 'no'");

let response1 = prompt(question1);
let response2 = prompt(question2);
let response3 = prompt(question3);
let response4 = prompt(question4);
let response5 = prompt(question5);

if (response1 === answer1) {
    score++;
}
if (response2 === answer2) {
    score++;
}
if (response3 === answer3) {
    score++;
}
if (response4 === answer4) {
    score++;
}
if (response5 === answer5) {
    score++;
}
let percent = (score / totalScore) * 100;
alert("You've answered " + percent + '% ' + 'right answers!')