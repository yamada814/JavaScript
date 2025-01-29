function repeat(callbackFunc, repeatNum) {
    for (let i = 0; i < repeatNum; i++){
        callbackFunc();
    }
}
function printAsterisc() {
    console.log("*");
}
// repeat(printAsterisc, 3);
repeat(() => { console.log("*") }, 5);

