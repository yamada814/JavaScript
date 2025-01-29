const robot = {
    pos: [0, 0],
    getPos(){
        return this.pos.slice();
    },
    setPos(x, y){
        this.pos[0] = x;
        this.pos[1] = y;
    }
}

robot.setPos(2, 4);
console.log(robot.getPos());

// let coordinate = robot.pos;
let coordinate = robot.getPos();
coordinate[0] = 4;
console.log(robot.getPos())
