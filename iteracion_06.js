// Parte 6.1
const numbers = [32, 21, 63, 95, 100, 67, 43];

const found = numbers.find(item => item > 95);
console.log(found);

// Parte 6.2
const movies = [
    { title: 'Madagascar', stars: 4.5, date: 2015 },
    { title: 'Origen', stars: 5, date: 2010 },
    { title: 'Your Name', stars: 5, date: 2016 }
];

const foundMovie = movies.find(item => item.date == 2010);
console.log(foundMovie);