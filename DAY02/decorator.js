// デコレータ（戻り値として作成した関数を返す高階関数）
function decorator(func){  // func：デコられる対象の関数
    const message_before = "前処理を行いました。";
    const message_after = "後処理を行いました。";
    return function(...args){  // デコる対象の関数を内部に含むデコった関数
        // 前処理 ---
        console.log(message_before);
        // ---
        const result = func(...args);  // 内部でデコられる対象の関数を呼び出す
        // 後処理 ---
        console.log(message_after);
        // ---
        return result;
    }
}

function hello(name){
    console.log(name + "さん、こんにちは");
    return name + "さん、こんにちは";
}
function GoodNight(name) {
    console.log(name + "さん、こんばんは");
    return name + "さん、こんばんは";
    
}
function greeting(name, greet) {
    console.log(name + "さん、" + greet);
    return name + "さん、" + greet;    
}

// const decoratedHello = decorator(hello);
// const decoratedGN = decorator(GoodNight);
const decoratedGreet = decorator(greeting);
const message = decoratedGreet("Taro", "yahho-");
console.log(message);

// const messageH = decoratedHello("湘南ハイテク企画");
// console.log(messageH);
// const message = decoratedGN("湘南ハイテク企画");
// console.log(message);