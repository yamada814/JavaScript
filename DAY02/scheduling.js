/*
const LIMIT = 5000;
console.log(LIMIT / 1000 + "秒の計測を開始");
setTimeout(() => { console.log(LIMIT / 1000 + "秒が経過しました"); }, LIMIT);

const LIMIT = 5000;
const INTERVAL_TIME = 1000;
let count = 0;
console.log(LIMIT / 1000 + "秒の計測を開始");
const intervalID = setInterval(() => {
    count++;
    console.log(count + "秒経過しました");
    if (count * 1000 === LIMIT) {
        clearInterval(intervalID);
        console.log("計測を終了します")
    }
},INTERVAL_TIME)

const LIMIT = 5000;
console.log("5秒を計測します。");
setTimeout(()=>{
    console.log(LIMIT/1000 + "秒が経過しました");
},LIMIT)
*/

console.log("5秒を計測します")
setTimeout(() => {
    console.log("5秒が経過しました")
}, 5000);
