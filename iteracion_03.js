// Part 3.1

const pointsList1 = [32, 54, 21, 64, 75, 43]
let numers = [...pointsList1]
console.log(numers)

// Part 3.2

const toy = {
    name: 'Bus laiyiar',
    date: '20-30-1995',
    color: 'multicolor'
};

let toyObject = { ...toy }
console.log(toyObject)

// Part 3.3

const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsLis3 = [54, 87, 99, 65, 32];

let pointsList4 = [...pointsList2, ...pointsLis3]
console.log(pointsList4)

// Part 3.4

const toy1 = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }

let newtoy = { ...toy1, ...toyUpdate };
console.log(newtoy);

// part 3.5

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
let indexToRemove = 1;
let cloneColors = [...colors.slice(0, indexToRemove), ...colors.slice(indexToRemove + 1)];

console.log(cloneColors);

