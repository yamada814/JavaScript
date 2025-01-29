// --- 引数で関数を受け取る高階関数 ---
function highOrederdFunction(func){
    console.log("---func を呼び出します---");
    func();
}
highOrederdFunction(()=>{console.log("hello")});

// --- 戻り値で内部で作成した関数を返す高階関数（クロージャの説明） --- 
function createHelloFunction(name){
    const message = "こんにちは";
    return function(){
        // message はクロージャに含まれている
        console.log(name+"さん、"+message);
    };
}
const hello = createHelloFunction("湘南ハイテク企画");
hello();