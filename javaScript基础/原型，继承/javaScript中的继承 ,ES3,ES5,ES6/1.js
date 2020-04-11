function Person(name) {
    this.name = name;
}

Person.prototype.printName = function () {
    console.log(this.name);
};

function Bob() {
    Person.call(this, 'Bob');
    this.hobby = 'histroy'
}

function inheritProto(Parent, Child) {
    var Fn = function() {};
    Fn.prototype = Parent.prototype;
    Child.prototype = new Fn();
    Child.prototype.constructor = Child;
}

Bob.prototype.printHobby = function() {
    console.log(this.hobby);
  };

inheritProto(Person, Bob)

console.log(new Bob())