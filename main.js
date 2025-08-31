const player = {
     score: 0,
     name: "Henry",
     sayHello: () => `Hey there, I'm ${player.name}!`
}

console.log(player.name);
console.log(player.score);
console.log(player.sayHello());

function Player2 (name, score) {
    this.name = name;
    this.score = score;
    this.sayHello = () => `Well hey, I'm ${this.name}!`
}

const player2 = new Player2("Joe", 1);

console.log(player2.name)
console.log(player2.score)
console.log(player2.sayHello())