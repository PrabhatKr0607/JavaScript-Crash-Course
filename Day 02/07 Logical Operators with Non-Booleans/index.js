//falsy (false)
//undefined
//null
// 0
// false
// ''
// Nan


//truthy (true)

let userColour = undefined;
let defaultColour = 'black';
let currentColour = userColour || defaultColour;

console.log(currentColour);
