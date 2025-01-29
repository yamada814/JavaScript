/*
class Person{
    static #objectID = "0001";
    static docs = "人を表すクラスです";
    birthplace = "出身地情報はありません";
    constructor(firstName, lastName, age, birthplace) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        if (birthplace) {
            this.birthplace = birthplace;
        }
    }
    static describes() {
        console.log(this.docs);
    }
    // static getObjectID() {
    //     return this.#objectID;
    // }

    static get objectID() {//ゲッター 
        return this.#objectID;
    }
    static set objectID(newID) {//セッター  
        this.#objectID = newID;
    }
    #makeText() {
        return `名前は${this.firstName} ${this.lastName}です。年齢は${this.age}歳です。`
    }
    introduce() {
        console.log(this.#makeText);
        console.log(`出身地は${this.birthplace}です。`);
    }
}
const person = new Person("太郎", "田中", 20);
person.introduce();
Person.describes();

Person.objectID = "0002";//セッターを呼び出す
console.log(Person.objectID);//ゲッターを呼び出す
class Hero{
    constructor(name) {
        this.name = name;
    };
    attack() {
        console.log(`${this.name}は敵に10のダメージを与えた`);
    };
}
class SuperHero extends Hero{
    constructor(name) {
        super(name);
    };
    superAttack() {
        console.log(`${this.name}は敵に20のダメージを与えた`);
    };
}
class UltraHero extends SuperHero{
    constructor(name) {
        super(name);
    };
    ultraAttack() {
        console.log(`${this.name}は敵に30のダメージを与えた`);       
    }
}
const h = new UltraHero("Taro");
h.ultraAttack();
h.superAttack();
h.attack();
*/

class Dog{
    constructor(breed, name, dateOfBirth) {
        this.breed = breed;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    };
    getBreed() { return this.breed };
    getName() { return this.name };
    getDateOfBirth() { return this.dateOfBirth };
    getInfo() {
        return `犬種:${this.breed},名前:${this.name},生年月日:${this.dateOfBirth}`};
}
const dog = new Dog("ポメラニアン", "ハイテク", "2020/3/15");
console.log(dog.getBreed());
console.log(dog.getName());
console.log(dog.getDateOfBirth());
console.log(dog.getInfo());