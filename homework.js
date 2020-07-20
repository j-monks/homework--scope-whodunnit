// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);
  
  // The murderer is Miss Scarlet.
  // Scenario, declareMurderer, verdict are all available globally via const

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// The murderer is Professor Plum.
// murder is a const and can't be changed to Mrs. Peacock

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// First Verdict: Mrs. Peacock
// declareMurderer function is being console logged which returns the murderer as Mrs. Peacock first
// Second Verdict: Professor Plum
// no function is being called and the second verdict is calling the let variable thats being assigned outside of any function

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
// Although suspectThree is available inside the declareAllSuspects function, it's changed inside which means when the function is called it will be changed
// Suspect three is Mrs. Peacock
// Suspect three remains the same when its not being called via the declareAllSuspects function because it's still at the global level as that value

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

// The weapon is the Revolver.
// You can mutate an objects contents even though its a constant, so that's why we get the result Revolver
