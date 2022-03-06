// Part 4.1

const users = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' }
];

const usersName = users.map(user => user.name);
console.log(usersName);

// Part 4.2

const users1 = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' }
];

const usersName1 = users1.map(user1 => {
    if (user1.name[0] === 'A') {
        return user1.name = "anacleto";
    } else { return user1.name }
});

console.log(usersName1);

// Part 4.3

const cities = [
    { isVisited: true, name: 'Tokyo' },
    { isVisited: false, name: 'Madagascar' },
    { isVisited: true, name: 'Amsterdam' },
    { isVisited: false, name: 'Seul' }
];

const cities1 = cities.map(city => {
    if (city.isVisited) {
        return city.name + ' (Visitado)';
    } else {
        return city.name;
    }
})

console.log(cities1);

