/*
function sayHelloWait(time) {
    const start = Date.now();
    while (Date.now() - start < time) {
        
    }
    console.log("Hello");
}
// 同期処理 コードを順番に実行していく 前の処理が終わったら次の処理を行う
console.log("開始");
sayHelloWait(3_000);
console.log("終了");

function sayHelloAwait(time) {
    setTimeout(() => {
        console.log("Hello")
    }, time);
}
// 非同期処理 前の処理が終わるのを待たずに次の処理を行う
console.log("開始");
sayHelloAwait(3_000);
console.log("終了");
*/
