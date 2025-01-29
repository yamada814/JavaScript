
/*
*/
{
    const obj = {};
    console.log(obj.toString());
    //objのベースとなるプロトタイプオブジェクトにtoStringプロパティが定義されている
}
{
    const obj = {};
    console.log(obj.__proto__ === Object.prototype);
    //objの__proto__プロパティから Objectのプロトタイプオブジェクトへ辿る
}
{
    const arr = [];
    console.log(arr.__proto__ === Array.prototype);
    console.log(Array.prototype.__proto__ === Object.prototype);
    console.log(Object.prototype.__proto__);//null   
}
{
    const obj = {};
    console.log(Object.getPrototypeOf(obj) === Object.prototype);
    
}
{
    const ancestorObj = {
        sayGoodBye: () => { console.log("GoodBye. (ancestorObj") },
        sayGreat:()=>{console.log("Great. (ancestorObj)")}
    }
    const parentObj = {
        sayGoodNight: () => { console.log("GoodNight. (parentObj)") },
        sayGreat:()=>{console.log("Great. (parentObj")}
    }
    //parentObjのプロトタイプにancentorObjを登録したい
    Object.setPrototypeOf(parentObj, ancestorObj);
    const childObj = {};
    Object.setPrototypeOf(childObj, parentObj);
    childObj.sayGoodNight();
    childObj.sayGreat();
}
