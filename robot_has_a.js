class Point {
    #x;
    #y;
    constructor(x = 0, y = 0) {
        this.#x = x;
        this.#y = y;
    }
    get x() {
        return this.#x;
    }
    set x(x) {
        this.#x = x;
    }
    get y() {
        return this.#y;
    }
    set y(y) {
        this.#y = y;
    }
}

class Robot{
    #point;
    constructor(x = 0, y = 0) {
        this.#point = new Point(x, y);
    }
    moveX(amount) {
        this.#point.x += amount;
    }
    moveY(amount) {
        this.#point.y += amount;
    }
    moveXY(amountX, amountY) {
        this.moveX(amountX);
        this.moveY(amountY);
    }
    getPosition() {
        // return [this.#point.x, this.#point.y];
        // return this.#point;//これだとオブジェクトの参照値を返しちゃうので他から変更をかけると副作用が起こる
        return new Point(this.#point.x,this.#point.y)
    }
    get x(){
        return this.#point.x;
    }
    set x(x){
        this.#point.x = x;
    }
    get y(){
        return this.#point.y;
    }
    set y(y){
        this.#point.y = y;
    }
}

const robot = new Robot();
robot.moveX(5);
robot.moveY(10);
console.log(robot.x, robot.y);

const point = robot.getPosition();
point.x *= 100;
point.y *= 100;
console.log(point.x, point.y); 
console.log(robot.x, robot.y);
// console.log(robot.getPosition()); // [5, 10]
// robot.moveXY(10, 5);
// console.log(robot.getPosition()); // [15, 15]