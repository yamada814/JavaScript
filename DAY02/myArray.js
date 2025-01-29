// const myArray = {
//     _arr: [],
//     myPush: function(...elements){
//         this._arr.push(...elements);
//     },
//     myMap(callbackFunc){
//         const arr = [];
//         for(let index = 0; index < this._arr.length; index++){
//             arr.push(
//                 callbackFunc(this._arr[index], index, this._arr)
//             );
//         }
//         return arr;
//     }
// }

// myArray.myPush(1,2,3,4,5);
// console.log(
//     myArray.myMap((num=>num*2))
// );


const myArray = {
    _arr: [],
    myPush(...nums) {
        this._arr.push(...nums)
    },
    myMap(callbackFunc) {
        const arr = [];
        for (let i = 0; i < this._arr.length; i++){
            arr.push(callbackFunc(this._arr[i], i,this._arr));
        }
        return arr;
    }
}
myArray.myPush(1, 2, 3, 4, 5);
console.log(myArray.myMap(num => num * 2));

