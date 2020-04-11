function Test(name) {
    this.name = name;
    console.log(this);
    return { age : 12 }
}

const t = new Test('hw');
console.log(t);