//commonJSのエクスポート
//module.exportsのプロパティに追加していく
function hello(name) {
  console.log(`こんにちは、${name}さん。`);
}
function goodMorning(name){
  console.log(`おはよう、${name}さん。`);
}  
function goodEvening(name){
  console.log(`こんばんは、${name}さん。`);
}  
function goodNight(name) {
    console.log(`おやすみなさい、${name}さん。`);
}
module.exports.hello = hello;
module.exports.goodMorning = goodMorning;
module.exports.goodEvening = goodEvening;
module.exports.goodNight = goodNight;