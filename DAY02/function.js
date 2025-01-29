function hello() {
    console.log("Hello.");
}
const obj1 = {
    h: hello
};
// obj1オブジェクトのhプロパティにひもづくhello関数を呼び出す
obj1.h()


function Person(name, age) {
    this.name = name;
    this.age = age;
    // return this
}
// Person関数の新しいオブジェクトを作り、
// その引数に"taro"と 20 を渡す
const taro = new Person("taro", 20);
console.log(taro);


