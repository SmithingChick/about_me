'use strict';

var userName = prompt('Hi there! What\'s your name');
alert('Hi, ' + userName + '. I\'m going to ask you some questions to see how well you know me.');
var totalCorrect = 0;

//  Question 1 - Wombats
function wombat() {
  var wombat = prompt('Am I obsessed with wombats?');

  if (wombat.toLowerCase() === 'yes' || wombat.toLowerCase() === 'y') {
    alert('I am! My current cell phone has wombat sticker on it & I call it the WomBatphone. May the Wombat of Happiness snuffle through your underbrush.');
    totalCorrect++;
  } else {
    alert('Strangely enough, I really am. It\'s North Dakota\'s fault. Yes, the state.');
  }
  console.log('It\'s all about those wacky marsupials');
}
wombat();

  // Question 2 - T-Shirts
function tshirts() {
  var tShirts = prompt('Do I wear a lot of goofy and/or band t-shirts?');

  if (tShirts.toLowerCase() === 'yes' || tShirts.toLowerCase() === 'y') {
    alert('I certainly do! I\'ve got a closet full of them.');
  } else {
    alert('You haven\'t seen me too often. I just about live in my many, many t-shirts.');
  }
  console.log('So many t-shirts!');
}
tshirts();

  // Question 3 - Music
function music() {
  var musicQuestionAnswer = prompt('Do I like the Greatful Dead?');

  if (musicQuestionAnswer.toLowerCase() === 'yes' || musicQuestionAnswer.toLowerCase() === 'y') {
    alert('No. I do not. Not even a little.');
  } else {
    alert('You\'re right! I do not. I\'m not into jam bands, either');
  }
  console.log('Cue up The Violets "I Hate the Greatful Dead" url="https://www.youtube.com/watch?v=ZN_3o59HFAc"');
}
music();

  // Question 4 - Books
function books() {
  var books = prompt('Do I read a lot of Edgar Allan Poe?');

  if (books.toLowerCase() === 'yes' || books.toLowerCase() === 'y') {
    alert('"Oh, the banging & the clanging of the bells!" He\'s my all-time favorite author');
  } else {
    alert('Quoth the Raven "Nevermore" I first read all of his short stories when I was 9. My parents were fans');
  }
  console.log('Heading into the Maelstrom for a Cask of Amontillado from the House of Usher');
}
books();

  // Question 5 - Game
function game() {
  var game = prompt('Am I currently developing a game involving bizarre conspiracy theories?');

  if (game.toLowerCase() === 'yes' || game.toLowerCase() === 'y') {
    alert('I am! Conspiracy Dice is currently in the play testing phase.');
  } else {
    alert('You haven\'t heard about Conspiracy Dice yet?');
  }
  console.log('It\'s the only possible explanation for all of the insanity that comes out of Alex Jones mouth.');
}
game();

  // Question 6 - Higher Learning
function degrees() {
  var degreesA = 3;

  for (var i = 4; i >= 1 && degreesQ !== degreesA; i--) {
    var degreesQ = Number(prompt('How many college degrees do I have?'));
    console.log('degreesQ = ', degreesQ);
    if (degreesQ === degreesA) {
      alert('That\'s right! I have a BA in  Psychology (with an Art Therapy minor), an MA in Studio Art: Jewelry/Metalsmithing, and an MFA in Studio Art: Jewelry/Metalsmithing');
    } else if (degreesQ < degreesA) {
      alert('Nope! I\'ve got more than that.');
    } else if (degreesQ > degreesA) {
      alert('Nope! Not quite that many.');
    } else {
      alert('Alas, I only have 3. I\'m not allowed to get any more.');
      console.log('I\'d probably just stay in school forever if they\'d let me.');
    }
  }
}
degrees();

// Question 7 - Cities

function home() {
  var cityA = ['erie', 'baltimore', 'wattsburg', 'grand forks', 'salem', 'portland'];
  var correct = false;
  for (var i = 5; i >= 0 && correct != true; i--) {
    var cityQ = prompt('Can you guess a city that I\'ve lived in? You have 6 guesses.').toLowerCase();
    if (cityQ == cityA[0] || cityQ == cityA[1] || cityQ == cityA[2] || cityQ == cityA[3] || cityQ == cityA[4] || cityQ == cityA[5]) {
      alert('That\'s right!');
      correct = true;
    } else {
      alert('Nope. I\'ve never lived in ' + cityQ + '. You have ' + i + ' guesses remaining.');
    }
    console.log('I did not die of cholera.');
  }
}
home();


alert('I\'ve lived in Erie, PA; Baltimore, MD; Wattsburg,PA; Grand Forks, ND; Portland, OR; and Salem, OR. I\'m currently in Portland & I love it!');
