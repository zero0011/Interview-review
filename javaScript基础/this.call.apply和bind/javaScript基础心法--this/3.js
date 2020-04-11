var person = {
    name : 'hw',
    age : 22
}

function say() {
    console.log(this.name+":"+this.age);
    return 1;
}

var f = say.bind(person,'FE');
console.log(f());