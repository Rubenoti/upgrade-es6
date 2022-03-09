// Part 7.1

const exams = [
    { name: 'Yuyu Cabeza Crack', score: 5 },
    { name: 'Maria Aranda Jimenez', score: 1 },
    { name: 'Cristóbal Martínez Lorenzo', score: 6 },
    { name: 'Mercedez Regrera Brito', score: 7 },
    { name: 'Pamela Anderson', score: 3 },
    { name: 'Enrique Perez Lijó', score: 6 },
    { name: 'Pedro Benitez Pacheco', score: 8 },
    { name: 'Ayumi Hamasaki', score: 4 },
    { name: 'Robert Kiyosaki', score: 2 },
    { name: 'Keanu Reeves', score: 10 }
];

const scores = exams.reduce(function (total, exam) {
    return total + exam.score;
}, 0);
console.log(scores);

// Part 7.2


const aproved = exams.filter(item => item.score >= 5);
const totalAproved = aproved.reduce(function (total2, aprov) {
    return total2 + aprov.score;
}, 0);
console.log(totalAproved);

// Part 7.3

const mediaExams = scores / exams.length;
console.log(mediaExams);