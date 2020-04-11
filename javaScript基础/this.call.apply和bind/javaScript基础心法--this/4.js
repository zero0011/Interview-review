function Person(name) {
    var name = 11;
    // this.name = name;
    this.say = () => {
         name = 'xb';
        return this.name;
    }
    this.say1 = function() {
        this.name1 = 'zs';
        return this.name1;
    }
}

// var person = new Person('hw');

// console.log(person.say())0


function foo() {
    setTimeout(() => {
        console.log(this.a)
    },1000);
}

var obj = {
    a : 2
}

foo.call(obj);