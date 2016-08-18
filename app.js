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
var books = prompt('Do I read a lot of Edgar Allan Poe?');

if (books.toLowerCase() === 'yes' || books.toLowerCase() === 'y') {
  alert('"Oh, the banging & the clanging of the bells!" He\'s my all-time favorite author');
} else {
  alert('Quoth the Raven "Nevermore" I first read all of his short stories when I was 9. My parents were fans');
}
console.log('Heading into the Maelstrom for a Cask of Amontillado from the House of Usher');

// Question 5 - Game
var game = prompt('Am I currently developing a game involving bizarre conspiracy theories?');

if (game.toLowerCase() === 'yes' || game.toLowerCase() === 'y') {
  alert('I am! Conspiracy Dice is currently in the play testing phase.');
} else {
  alert('You haven\'t heard about Conspiracy Dice yet?');
}
console.log('It\'s the only possible explanation for all of the insanity that comes out of Alex Jones mouth.');

// Question 6 - Higher Learning
var degrees = prompt('How many college degrees do I have?');

degrees = Number(degrees);
if (degrees === 3) {
  alert('That\'s right! I have a BA in  Psychology \(with an Art Therapy minor\)\, an MA in Studio Art: Jewelry/Metalsmithing\, and an MFA in Studio Art: Jewelry/Metalsmithing');
} else if (degrees < 3) {
  alert('Nope! I\'ve got more than that.');
} else {
  alert('Alas, I only have 3. I\'m not allowed to get any more.');
}
console.log('I\'d probably just stay in school forever if they\'d let me.');

// Question 7 - Cities
var city =  prompt('Can you guess a city that I\'ve lived in?');

if (city.toLowerCase() === 'erie' || city.toLowerCase() === 'baltimore' || city.toLowerCase() === 'wattsburg' || city.toLowerCase() === 'grand forks' || city.toLowerCase() === 'salem' || city.toLowerCase() === 'portland') {
  alert('I\'ve lived in Erie, PA; Baltimore, MD; Wattsburg,PA; Grand Forks, ND; Portland, OR; and Salem, OR. I\'m currently in Portland & I love it!');
} else {
  alert('Nope. I\'ve never lived in ' + city + '.');
}
console.log('I did not die of cholera.');
