var myAnswerOne = 'RUSSIA';
var myAnswerTwo = 'KIA';
var myAnswerThree = 'YES';
var myAnswerFour = 'SAMMAMISH';

//Guessing Game here
function guessingGame(){
  var score = 0;

  var answerOne = prompt('Let\'s start with an easy question. Where was I born?').toUpperCase();
  if (answerOne === myAnswerOne){
    alert('Correct! I was born in Russia');
    score++;
  }
  else{
    alert('Ups!.. Wrong. I was born in Russia');
  }

  var answerTwo = prompt('What car do I drive?');
  if (answerTwo.toUpperCase() === myAnswerTwo){
    alert('Correct! I drive a Kia Sportage');
    score++;
  }
  else{
    alert('Ups!.. Wrong. I drive a Kia Sportage');
  }

  var answerThree = prompt('Do I have children?');
  if (answerThree.toUpperCase() === myAnswerThree){
    alert('Correct! I have two kids');
    score++;
  }
  else{
    alert('Ups!.. Wrong. I have two kids');
  }

  var answerFour = prompt('Where do I live now?');
  if (answerFour.toUpperCase() === myAnswerFour){
    alert('Correct! I live in Sammamish');
    score++;
  }
  else{
    alert('Ups!.. Wrong. I live in Sammamish');
  }
  //using array
    var cities = ['NEW YORK', 'LONDON', 'PARIS', 'ROME', 'SEATTLE'];
    var counter = 1;
    while (counter <  4)  {
    var countDown = 4 - counter;
    var userResponseForCity = prompt('Now you have ' + countDown + ' attempts to guess one of my favorite cities. Try number ' + counter).toUpperCase();
     if (cities.indexOf(userResponseForCity)!== -1) {
     alert('You got it! ' + userResponseForCity + ' is one of my favorite cities');
      counter = 4;
      score++;
      } else {
       alert('Not my favorite, sorry');
       counter ++;
       }
    }
    alert('Nice playing with you! Your score is ' + score);
}

var game = prompt('Would you like to play a guessing game? Yes/No');
console.log(game);
if (game === 'y' || game === 'Y' || game ==='Yes' || game === 'yes' || game === 'YES'){
  guessingGame();
} else {
  alert('Nice meeting you! We\'ll paly next time!');
  }
