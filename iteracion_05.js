// Part 5.1

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const ageMoreThan18 = ages.filter(age => age > 18);
console.log(ageMoreThan18);


// Part 5.2

const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const ageParNumber = ages2.filter(age2 => age2 % 2 === 0);
console.log(ageParNumber);

// Part 5.3

const streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const streamersWithU = streamers.filter(streamer => streamer.name.includes("u"));
console.log(streamersWithU);

// Part 5.4

const streamers2 = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const streamesPlayLol = streamers2.filter(streamer2 => streamer2.gameMorePlayed.includes("League of Legends"));
console.log(streamesPlayLol);

//Part 5.5

const streamersPlayLol2 = streamers2.filter(streamer2 => streamer2.gameMorePlayed.includes("Legends"));
const streamerUpperCase = streamersPlayLol2.map(streamer2 => {
    if (streamer2.age > 35) {
        streamer2.gameMorePlayed = streamer2.gameMorePlayed.toUpperCase(true);
        return streamer2;
    }
});
console.log(streamersPlayLol2);

// Part 5.6

const streamers3 = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];


let input = document.querySelector("[data-function='toFilterStreamers]");



function toFilterStreamers() {
    let name = input.value;
    streamers3.filter(streamer => {
        if (streamer.name.includes(name)) {
            const print = document.createElement('p');
            print.innerHTML = `<p>${streamer.name}</p>`;
        }

    });

};

document.body.appendChild(print)