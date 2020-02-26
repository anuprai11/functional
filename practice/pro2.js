// either
const {logger} = require('./logger');
const {Left, Right} = require('./functors');

// function getNameFromId(id){
//   return {1:'KGB', 2: 'CIA', 3:'FBI'}[id];
// }


function getNameFromId(id){
  const item = {1:'KGB', 2: 'CIA', 3:'FBI'}[id];
  return item ? Right(item) : Left(item);
}

console.log(
  getNameFromId(2)
  .map((s) => s.toLowerCase())
  .fold(()=>'error not found', x => x)
)
