var myAnswerOne = 'RUSSIA';
var myAnswerTwo = 'KIA';
var myAnswerThree = 'YES';
var myAnswerFour = 'SAMMAMISH';
var userName = prompt('What\'s your name?');

alert ('Hello ' + userName + ' Thanks for visiting my site!');

//Guessing Game
var game = prompt('Would you like to play a guessing game? Yes/No');
if ((game === 'y') || (game === 'Y') || (game ==='Yes') || (game === 'yes') || (game = 'YES')){
  var answerOne = prompt('Let\'s start with an easy question. Where was I born?').toUpperCase();
  if (answerOne === myAnswerOne){
    alert('Correct! I was born in Russia');
  }
  else{
    alert('Ups!.. Wrong. I was born in Russia');
  }
  var answerTwo = prompt('What car do I drive?');
  if (answerTwo.toUpperCase() === myAnswerTwo){
    alert('Correct! I drive a Kia Sportage');
  }
  else{
    alert('Ups!.. Wrong. I drive a Kia Sportage');
  }
  var answerThree = prompt('Do I have children?');
  if (answerThree.toUpperCase() === myAnswerThree){
    alert('Correct! I have two kids');
  }
  else{
    alert('Ups!.. Wrong. I have two kids');
  }
  var answerFour = prompt('Where do I live now?');
  if (answerFour.toUpperCase() === myAnswerFour){
    alert('Correct! I live in Sammamish');
  }
  else{
    alert('Ups!.. Wrong. I live in Sammamish');
  }
  //using array
  var cities = ['NEW YORK', 'LONDON', 'PARIS', 'ROME', 'SEATTLE'];
  var userResponseForCity =prompt('Name one of my favorite cities:').toUpperCase();
  if (cities.indexOf(userResponseForCity)!== -1) {
    alert('You got it! ' + userResponseForCity + ' is one of my favorite cities');
  }
  else{
    alert('Not my favorite.  Paris is everyone\'s safe bet :)');
  }
  alert('Game\'s over! :)');
}
else {
  alert('Nice meeting you!');
}
