# js 基础 - call , apply , bind
    也就是说 , 这三个方法可以改变函数体内部 this 的指向
    那这三个方法有什么区别吗? 分别适合应用在哪些场景中呢?

```js
var person = {
  name: "axuebin",
  age: 25
};
function say(job){
  console.log(this.name+":"+this.age+" "+job);
}
say.call(person,"FE"); // axuebin:25 FE
say.apply(person,["FE"]); // axuebin:25 FE
var sayPerson = say.bind(person,"FE");
sayPerson(); // axuebin:25 FE
```

    对于对象person 而言 , 并没有 say 这样一个方法 , 通过 call/apply /bind 就可以将外部的 say 方法 用于这个对象中 , 其实就是将 say 内部的 this 指向 person 这个对象

## call
    call 是属于所有 Function的方法 , 也就是 Function.protitype.call
    call() 方法调用一个函数 , 其具有一个指定的 this 值和 分别地提供的参数(参数列表)
    call 的用处间而言之就是可以让 call()中的对象调用当前对象所拥有的 function