var person = {
    name: "axuebin",
    age: 25
};

function say(job) {
    console.log(this.name + ":" + this.age + " " + job);
}

// say.call(person,'FE')
// say.apply(person,["FE"]); // axuebin:25

say.call('hello','FE')