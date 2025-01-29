/*
*/
class Dog{
    constructor(breed, name, dateOfBirth) {
        this.breed = breed;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    getBreed() {
        return this.breed;
    }
    getName() {
        return this.name;
    }
    getDateOfBirth() {
        return this.dateOfBirth;
    }
    getInfo() {
        return `犬種:${this.getBreed()},名前:${this.getName()},生年月日:${this.getDateOfBirth()}`;
    }
    
}
const dog = new Dog("ポメラニアン", "ハイテク", "2020/3/15");
console.log(dog.getBreed());
console.log(dog.getName());
console.log(dog.getDateOfBirth());
console.log(dog.getInfo());
function Dog(breed, name, dateOfBirth) {
    this.breed = breed;
    this.name = name;
    this.dateOfBirth = dateOfBirth;    
}
Dog.prototype.getBreed = function(){return this.breed;};
Dog.prototype.getName = function(){return this.name;};
Dog.prototype.getDateOfBirth = function(){return this.dateOfBirth;};
Dog.prototype.getInfo = function () { return `犬種:${this.getBreed()},名前:${this.getName()},生年月日:${this.getDateOfBirth()}`; };

const dog = new Dog("ポメラニアン", "ハイテク", "2020/3/15");
console.log(dog.getBreed());
console.log(dog.getName());
console.log(dog.getDateOfBirth());
console.log(dog.getInfo());