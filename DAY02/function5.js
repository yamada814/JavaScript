function Person(name, age){
    this.name = name;
    this.age = age;
    // return this;
}
// プロトタイプ
Person.prototype.intro = function(){
    console.log("私の名前は" + this.name + "です。年齢は" + this.age +"です。");
}

const taro = new Person("太郎", 20);
const hanako = new Person("花子", 25);
taro.intro();
hanako.intro();