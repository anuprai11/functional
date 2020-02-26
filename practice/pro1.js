//normal compositio

const {logger} = require('./logger')

// function nextCharFromNumberString (s){
// 	const trimmedString = s.trim();
// 	const parsedInt = parseInt(trimmedString) + 1;
// 	return String.fromCharCode(parsedInt);
// }















const Box = (x) => ({
  map: f => Box(f(x)),
  inspect: () => `Box(${x})`,
  fold:f=> f(x),
})


const nextCharFromNumberString = s => Box(s)
 .map(s=>s.trim())
 .map(num=>parseInt(num))
 .map(num=>num+1)
 .fold(String.fromCharCode);

console.log(nextCharFromNumberString(' 64'));
