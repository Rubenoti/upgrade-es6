// Part 2.1

const game = {
    title: 'The last us 2',
    gender: ['action', 'zombie', 'survival'],
    year: 2020
};
let { gender } = game
console.log(gender)

// Part 2.2 

const fruits = ['Banana', 'Strawberry', 'Orange'];
let fruit1 = fruits[0];
let fruit2 = fruits[1];
let fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

// Part 2.3

const animalFunction = () => {
    return {
        name: 'Bengal Tiger',
        race: 'Tiger'
    }
};

let { name, race } = animalFunction()
console.log("Nombre: " + name + ". Raza: " + race)

// Part 2.4

const car = { name: 'Mazda 6', itv: [2015, 2011, 2020] }

let name1 = car.name
let itv = car.itv

let year1 = itv[0]
let year2 = itv[1]
let year3 = itv[2]

console.log(name1, itv, year1, year2, year3);