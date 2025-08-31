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

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() { 
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "already read" : "not read yet"}.`
};

const book1 = new Book("Lord of the Rings", "J.R.R Tolkien", 295, false);
console.log(book1.info())

console.log(Object.getPrototypeOf(player2) === Player2.prototype);

console.log(Object.getPrototypeOf(player) === Player2.prototype); 