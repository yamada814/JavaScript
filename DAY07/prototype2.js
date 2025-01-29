/*
function Person(name) {
    this.name = name;
    }
    
    Person.prototype.greet = function() {
        return `Hello, my name is ${this.name}`;
        };
        
        const alice = new Person("Alice");
        
        console.log(alice.greet()); // 問1-1: 結果は？ Hello my name is Alice
  console.log(alice.hasOwnProperty("greet")); // 問1-2: 結果は？ false
  console.log(Person.prototype.isPrototypeOf(alice)); // 問1-3: 結果は？ true
  function Animal(type) {
    this.type = type;
}

Animal.prototype.speak = function() {
    return `I am a ${this.type}`;
};

function Dog(name) {
    Animal.call(this, "dog");
    this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    return `${this.name} says woof!`;
};

const buddy = new Dog("Buddy");

console.log(buddy.speak()); // 問2-1: 結果は？ 
console.log(buddy.bark()); // 問2-2: 結果は？
console.log(buddy instanceof Dog); // 問2-3: 結果は？
console.log(buddy instanceof Animal); // 問2-4: 結果は？
function Vehicle(type) {
    this.type = type;
}

Vehicle.prototype.getType = function() {
    return `This is a ${this.type}`;
};

const car = new Vehicle("car");

// プロトタイプを変更
Vehicle.prototype.getType = function() {
    return `Modified: This is a ${this.type}`;
};

console.log(car.getType()); // 問3-1: 結果は？Modified

function Parent() {}
Parent.prototype.sayHello = function() {
    return "Hello from Parent!";
};

function Child() {}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.sayHello = function() {
    return "Hello from Child!";
};

const instance = new Child();

console.log(instance.sayHello()); // 問4-1: 結果は？ Hello from Child
console.log(Object.getPrototypeOf(instance).sayHello()); // 問4-2: 結果は？Hello from Child
console.log(Object.getPrototypeOf(Object.getPrototypeOf(instance)).sayHello()); // 問4-3: 結果は？Hello from Parent!

*/
function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function() {
  return `I am a ${this.type}`;
};

function Dog(name) {
  Animal.call(this, "dog");//AnimalのthisにDogから作ったインスタンスを固定してAnimal関数を実行？
  this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  return `${this.name} says woof!`;
};

const buddy = new Dog("Buddy");

console.log(buddy.speak()); // 問2-1: 結果は？ I am a dog
console.log(buddy.bark()); // 問2-2: 結果は？ buddy says woof
console.log(buddy instanceof Dog); // 問2-3: 結果は？ true
console.log(buddy instanceof Animal); // 問2-4: 結果は？ true?
