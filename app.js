'use strict';

var name = prompt('Hi there! What\'s your name');
alert('Hi, ' + name + '. I\'m going to ask you some questions to see how well you know me.');

//  Question 1 - Wombats
var wombat = prompt('Am I obsessed with wombats?');

if (wombat.toLowerCase() === 'yes' || wombat.toLowerCase() === 'y') {
  alert('I am! My current cell phone has wombat sticker on it & I call it the WomBatphone. May the Wombat of Happiness snuffle through your underbrush.');
} else {
  alert('Strangely enough, I really am. It\'s North Dakota\'s fault. Yes, the state.');
}
console.log('It\'s all about those wacky marsupials');


// Question 2 - T-Shirts
var tShirts = prompt('Do I wear a lot of goofy and/or band t-shirts?');

if (tShirts.toLowerCase() === 'yes' || tShirts.toLowerCase() === 'y') {
  alert('I certainly do! I\'ve got a closet full of them.');
} else {
  alert('You haven\'t seen me too often. I just about live in my many, many t-shirts.');
}
console.log('So many t-shirts!');


// Question 3 - Music
var musicQuestionAnswer = prompt('Do I like the Greatful Dead?');

if (musicQuestionAnswer.toLowerCase() === 'yes' || musicQuestionAnswer.toLowerCase() === 'y') {
  alert('No. I do not. Not even a little.');
} else {
  alert('You\'re right! I do not. I\'m not into jam bands, either');
}
console.log('Cue up The Violets "I Hate the Greatful Dead" url="https://www.youtube.com/watch?v=ZN_3o59HFAc"');

// Question 4 - Books
var books = prompt('Do I read a lot of Edgar Allen Poe?');

if (books.toLowerCase() === 'yes' || books.toLowerCase() === 'y') {
  alert('Quothe the Raven "Nevermore"');
} else {
  alert('"Oh, the banging & the clanging of the bells!" He\'s my all-time favorite author');
}
console.log('Heading into the Maelstrom for a Cask of Amontillado from the House of Usher');

// Question 5 - Game
var game = prompt('Am I currently developing a game involving bizarre conspiracy theories?');

if (game.toLowerCase() === 'yes' || game.toLowerCase() === 'y') {
  alert('I am! Conspiracy Dice is currently in the play testing phase.');
} else {
  alert('You haven\'t heard about Conspiracy Dice yet?');
}
console.log('It\'s the only possible explaination for the insanity that comes out of Alex Jones mouth.');
