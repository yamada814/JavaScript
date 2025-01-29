/*
try {
    console.log(person.name);
} catch (error) {
    console.log(error);
    console.error(error);
} finally {
    console.log("プログラムを終了します");
}


const TAX_RATE = 10;
function calcTax(price) {
    if (price < 0) {
        throw new RangeError("価格に負の値を指定できません");
    }
    return price * TAX_RATE;
}
try {
    console.log(calcTax(-100));
} catch (error) {
    console.log(error);
}
*/
try{
    console.log(calculateAverage(1, 2, 3));  // 2
    console.log(calculateAverage(1, 2, 3, 4, 5));  // 3
    console.log(calculateAverage());  // 0
    console.log(calculateAverage(1, 2, "a", 4, 5));  // エラーが発生
}catch(err){ 
    console.error(err.message);  // 数値以外の値を指定することはできません。
}

function calculateAverage(...numbers){
    return numbers.length
     && numbers.reduce(
        (prev, num) => {
             if (typeof num !== "number") {
                 throw new TypeError("数値以外の値を指定することはできません。");
            }
            return prev + num;
        }, 0) / numbers.length;
}