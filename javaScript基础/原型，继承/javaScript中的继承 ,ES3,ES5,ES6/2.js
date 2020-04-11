function Person(name) {
    this.name = name;
}

Person.prototype.printName = function() {
    console.log(this.name);
}

function Bob() {
    Person.call(this,'bob');
    this.hobby = 'history';
}

Bob.prototype = Object.create(Person.prototype);

Bob.prototype.printHobby = function() {
    console.log(this.hobby);
}

let b = new Bob();
b.printName()