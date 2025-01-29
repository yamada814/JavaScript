/*
// アロー関数式以外で宣言された関数は、コンストラクタ関数として使える
// new演算子で呼び出すと、関数のプロトタイプオブジェクトを継承した新たなオブジェクトを作成
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
// Person の prototype に introduce メソッドを追加
Person.prototype.introduce = function () {
    console.log(`名前は${this.firstName} ${this.lastName}です。年齢は${this.age}です。`);
}
const p = new Person("太郎", "田中", 20);
p.introduce();
// pはPerson関数からnewで呼び出し、新たなオブジェクトを作った。
// このオブジェクトは関数のプロトタイプオブジェクトを継承してるので、
// pの__proto__プロパティから、Person関数のプロトタイプオブジェクトへ辿れる
console.log(p.__proto__ === Person.prototype);

function Employee(firstName, lastName, age, position){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.position = position;
}
Employee.prototype.getPosition = function () {
    console.log(`役職は${this.position}です`);
}
// Employee関数のプロトタイプに、Person関数のプロトタイプを登録
Object.setPrototypeOf(Employee.prototype, Person.prototype);
const e = new Employee("太郎", "田中", 20, "manager");
e.getPosition();
e.introduce();
*/
function Dog(breed,name,dateOfBirth){
        this.breed = breed;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    };
Dog.prototype.getBreed = function() { return this.breed };
Dog.prototype.getName = function() { return this.name };
Dog.prototype.getDateOfBirth = function() { return this.dateOfBirth };
Dog.prototype.getInfo = function() {
        return `犬種:${this.breed},名前:${this.name},生年月日:${this.dateOfBirth}`};

const dog = new Dog("ポメラニアン", "ハイテク", "2020/3/15");
console.log(dog.getBreed());
console.log(dog.getName());
console.log(dog.getDateOfBirth());
console.log(dog.getInfo());