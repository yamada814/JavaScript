const timer = {
    time: 60_000,  // 計測時間（単位:ミリ秒）, 初期値として60秒を設定
    duration: 1_000,  // 残り時間の表示間隔（単位:ミリ秒）
    intervalId: null,  // インターバルID
    remainingTime: null,  // 残り時間（単位:ミリ秒）
    // ▼ 残り時間を表示するメソッド
    showRemainingTime(){
        console.clear();  // 過去の出力履歴をクリア
        console.log(this.remainingTime / 1_000);  // 残り時間（単位:秒）を出力
    },
    // ▼ 計測時間を設定するメソッド, 引数で渡される時間の単位は秒
    setTime(time){
        // 引数で渡された値が有効でない場合はエラーメッセージを出力
        if(typeof time !== "number"){
            console.log("TypeError:時間は数値で指定してください。");
            return;
        }else if(time < 1){
            console.log("RangeError:時間は1秒以上で指定してください。");
            return;
        }
        // 単位を秒からミリ秒に変換して time プロパティの値を更新
        // 引数 time の小数点以下は parseInt() 関数で切り捨てる
        this.time = parseInt(time) * 1_000;
    },
    // ▼ 計測を開始するメソッド
    start(){
        // 既にタイマーが計測中の場合は先に動作を取り消す
        if(this.intervalId) clearInterval(this.intervalId);
        // 残り時間の設定と表示
        this.remainingTime = this.time;
        this.showRemainingTime();
        // 繰り返し処理の実行
        this.intervalId = setInterval(()=>{
            // 残り時間の減算と表示
            this.remainingTime -= this.duration;
            this.showRemainingTime();
            // 残り時間が0になったら取り消す
            if(this.remainingTime === 0){
                clearInterval(this.intervalId);
                this.intervalId = null;  // 準備状態であることを明示
            }
        }, this.duration);
    },
    pause(){
        
    }
}
// ▼ 動作確認用のテストコード
timer.setTime(10);
timer.start();


// function createDecorator(character){
//     return {
//         // decoration: character,
//         decorate(target){
//             return character.repeat(target.length) + "\n"
//             + target + "\n" + character.repeat(target.length);
//         }        
//     };
// }
// const asteriskDecorator = createDecorator("*");
// asteriskDecorator.decoration = "$";
// console.log(asteriskDecorator.decorate("hello"));


// function createPerson(name){
//     return {
//       name: name,
//       introduce(){
//         console.log(`私の名前は${this.name}です。`);
//       }
//     }
//   }
//   const person1 = createPerson("佐藤");
//   person1.introduce();

// const rootUrl = "https://www.sh-k.com";
// const relativePaths = [
//     "/education",
//     "/support",
//     "/recruit",
//     "/company",
//     "/company/access",
//     "/company/sitepolicy"
// ];
// // --- ▼ 以下のコードを追加 ----
// const absolutePaths = relativePaths.reduce(
//     (prev, path)=>{
//         prev.push(rootUrl + path);
//         return prev;
//     }, []);
// // 確認のためコンソールに出力
// console.log(absolutePaths);


// const person = {
//     firstName: "太郎",
//     lastName: "田中",
//     age: 20,
//     getFullName: function(){
//         return `${this.lastName} ${this.firstName}`;
//     },
//     introduce: function(){
//         console.log(`私の名前は${this.getFullName()}です。年齢は${this.age}才です。`);
//     }
// };
// person.introduce();


// // 条件式 ? 条件式の評価がTruthyのきの値（式）：Falsyのときの値（式）

// const price = 500;
// console.log( price < 1000 ? "A" : (price < 2000 ? "B" : "C") );

// console.log( price < 1000 && "A" )


// (price < 1000 && "A") || (price < 2000 && "B") || "C"
// // truthy(true)  && "A"  ： 右辺 "A" が結果になる
// // falsy(false) && "A" : "A"は評価されず左辺の falsy が結果になる