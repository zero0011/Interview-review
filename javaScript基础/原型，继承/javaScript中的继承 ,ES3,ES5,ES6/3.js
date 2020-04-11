class Person {
    constructor(name) {
        this.name = name;
    }

    printName () {
        console.log(this.name);
    }
}

class Bob extends Person {
    constructor() {
        super('Bob');
        this.hobby = 'history'
    }

    printHobby () {
        console.log(this.hobby);
    }
}

console.dir(new Bob())