function hello(name) {
  console.log(`こんにちは、${name}さん。`);
}
export default hello;
// export function hello(name) {
//   console.log(`こんにちは、${name}さん。`);
// }
export function goodMorning(name){
  console.log(`おはよう、${name}さん。`);
}
// 2. 夕方の挨拶
export function goodEvening(name){
  console.log(`こんばんは、${name}さん。`);
}
// 3. 就寝前の挨拶
export function goodNight(name){
  console.log(`おやすみなさい、${name}さん。`);
}
