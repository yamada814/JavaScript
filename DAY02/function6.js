this.name = "グローバル";
this.age = 0;
const introduce = ()=>{
    console.log("私の名前は" + this.name + "です。年齢は" + this.age +"です。"); 
};

const taro = {
    name: "太郎",
    age: 20,
    intro: introduce
};
taro.intro();

const hanako = {
    name: "花子",
    age: 25,
    intro: introduce
};
hanako.intro();