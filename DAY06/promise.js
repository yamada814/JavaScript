/*
const url = "https://google.co.jp";  // リクエスト送信先のURL
const promise = fetch(url);
promise.then(response => {
    if (response.ok) {
        console.log(`リクエストに成功しました${response.status}`);
    } else {
        console.log(`リクエストに失敗しました${response.status}`);
}
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log("Promiseの処理が終了しました。");
});
// Promise(非同期処理を行う誓約書)を作成して返す関数
// 処理が正常に終了した場合とそうじゃなかった場合に次に行うべき処理を
// Promiseオブジェクトがもつ３つのメソッド(then(),catch(),finally())を呼び出して実行する
// Promiseは３つの状態(pending,fulfilled,rejected)がある
// Promiseオブジェクト作成時にコンストラクタの引数にresolve関数とreject関数を渡す
function createPromise(flag, id) {
    return new Promise((resolve, reject) => {
        if (flag) resolve(`${id}:成功しました`);
        //fulfilledとなった時に、resolve()の引数 `${id}:成功しました` が、then()の引数であるコールバック関数にに渡される
        if (flag) resolve(`${id}:成功しました`);
        else reject(`${id}:失敗しました`);
        //rejectedとなった時に、resolve()の引数 `${id}:失敗しました` が、catch()の引数に渡される
    });
}
createPromise(true, 1)
.then((val) => { console.log(val); })
.catch((val) => { console.log(val); })
.finally(()=>{console.log("1のProgramは正常に終了しました");
})
createPromise(false, 2)
.then((val) => { console.log(val); })
.catch((val) => { console.log(val) })
.finally(() => console.log("2のPromiseが終了"))

function twoTimes(num) {
    return num * 2;
}
function threeTimes(num) {
    return num * 3;
}
const promise = new Promise((resolve) => {
    resolve(1);
});
promise
.then(twoTimes)
// fulfilledとなったときに、thenに引数であるコールバック関数がよばれる その引数がresolve()に渡した引数
.then(threeTimes)
// 前のthenメソッドのコールバック関数を実行した戻り値が、今回のthenメソッドのコールバック引数に渡す引数となる
// threeTimes関数にtwoTimes関数の戻り値2を渡す
.then((result) => {console.log(result);
})
// 前のthenメソッドの戻り値がresultに渡される



function createPromise(flag, id, delay) {
    if (delay === undefined) delay = 0;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (flag) resolve(`${id}:成功しました`)
            else reject(`${id}:失敗しました`)
}, delay);
})
}
const promiseT1 = createPromise(true,1)
const promiseT2 = createPromise(true,2)
const promiseT3 = createPromise(true,3)
const promiseF4 = createPromise(false,4)
const promiseF5 = createPromise(false,5)
// ▼ 最初に決定したプロミスが履行であれば、全体の評価が履行となる
Promise.all([promiseT1, promiseT2, promiseT3])
.then(values => { console.log("all1:", values) })
.catch(values => { console.log("all1:", values) });
// ▼ 最初に決定したプロミスが拒否であれば、全体の評価が拒否となる
Promise.all([promiseT3, promiseF4, promiseF5])
.then(values => console.log("all2:", values))
.catch(error => console.log(error))

Promise.any([promiseT1,promiseF4, promiseF5])
.then(values => { console.log(values); })
.catch(error => {console.log(error);});
Promise.any([promiseF4, promiseF5])
.then(values => { console.log(values); })
.catch(error => { console.log(error); });

Promise.race([promiseT1,promiseF4, promiseF5])
.then(values => { console.log(values); })
.catch(error => { console.log(error); });

const promiseT10delay1 = createPromise(true, 10, 1_000);  // 1秒後に必ず履行される
const promiseT11delay2 = createPromise(true, 11, 2_000);  // 2秒後に必ず履行される
const promiseT12delay3 = createPromise(true, 12, 3_000);  // 3秒後に必ず履行される
const promiseF13delay1 = createPromise(false, 13, 1_000);  // 1秒後に必ず拒否される

Promise.race([promiseT10delay1, promiseT11delay2, promiseT12delay3])
.then(values => { console.log(values); })
.catch(error => { console.log(error); });
Promise.race([promiseT11delay2, promiseT12delay3, promiseF13delay1])
//promiseF13delay1が最初に実行されrejectedとなるので、全体がrejectedとなる
.then(values => { console.log(values); })
.catch(error => { console.log(error); });

const promiseT14delay1 = createPromise(true, 14, 1_000);  // 1秒後に必ず履行される
const promiseT15delay2 = createPromise(true, 15, 2_000);  // 2秒後に必ず履行される
const promiseT16delay3 = createPromise(true, 16, 3_000);  // 3秒後に必ず履行される
const promiseF17delay1 = createPromise(false, 17, 1_000);  // 1秒後に必ず拒否される

Promise.allSettled([promiseT14delay1, promiseT15delay2, promiseT16delay3, promiseF17delay1])
//すべてのプロミスが決定されるまで履行、拒否を延期する
.then(value => { console.log(value); })
.catch(error => { console.log(error); });

// 次のコードを完成させてください。
// getData関数は、2秒後に「データを取得しました！」という文字列をresolveで返すPromiseを返します。
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(resolve("データを取得しました！"));
            
        },2000)
    });
}

getData()
.then((data) => {
    console.log(data); // 出力: データを取得しました！
})
.catch((error) => {
    console.error(error);
});

// 次のコードにはprocessTaskという関数があります。この関数を完成させて、次の仕様を満たしてください。

// processTaskは、ランダムで成功または失敗する非同期処理を行う。
// 0.5以上のランダムな数値が生成された場合は成功し、resolveで「タスク成功！」を返す。
// 0.5未満の場合は失敗し、rejectで「タスク失敗！」を返す。

function processTask() {
    return new Promise((resolve, reject) => {
        const judge = Math.random();
        if (judge >= 0.5) resolve("タスク成功！");
        else reject("タスク失敗");
    });
}

processTask()
.then(value => { console.log(value) })
.catch(error => { console.log(error); });
//問題3: 複数のPromiseを処理する
//次のコードを完成させてください。
//このコードでは、複数の非同期処理（Promise）を一度に実行し、
//そのすべてが成功した場合に「すべて成功！」と出力する必要があります。

function task1() {
    return new Promise((resolve) => setTimeout(() => resolve("タスク1完了"), 1000));
}

function task2() {
    return new Promise((resolve) => setTimeout(() => resolve("タスク2完了"), 2000));
}

function task3() {
    return new Promise((resolve) => setTimeout(() => resolve("タスク3完了"), 3000));
}

Promise.all([task1,task2,task3])
.then((messages) => {
    console.log("すべて成功！", messages);
})
.catch((error) => {
    console.error("エラーが発生しました:", error);
});
// 問題4: Promise.allとPromise.raceの違い
// 次のコードを実行すると、どのような結果が出力されますか？説明もしてください。
const promise1 = new Promise((resolve) => setTimeout(() => resolve("タスク1完了"), 2000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("タスク2完了"), 1000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => reject("タスク3失敗"), 1500));

Promise.all([promise1, promise2, promise3])
.then((results) => {
    console.log("すべて成功:", results);
})
.catch((error) => {
    console.error("エラー発生:", error);
});
//promise3がrejectなので失敗する

Promise.race([promise1, promise2, promise3])
.then((result) => {
    console.log("最初に完了した:", result);
})
.catch((error) => {
    console.error("最初に失敗した:", error);
});
//promise1が最初にresolveに決定するので成功する

//
以下は、Promiseについて学び、理解を深めるための練習問題集です。各問題は、Promiseの基本的な動作や非同期処理を活用した実践的な内容を含んでいます。

問題1: Promiseの基本構造
次のコードを完成させてください。getData関数は、2秒後に「データを取得しました！」という文字列をresolveで返すPromiseを返します。

javascript
コピーする
編集する
function getData() {
    return new Promise((resolve, reject) => {
        // ここを埋めてください
    });
}

getData()
.then((data) => {
    console.log(data); // 出力: データを取得しました！
})
.catch((error) => {
    console.error(error);
});
問題2: 成功と失敗の分岐
次のコードにはprocessTaskという関数があります。この関数を完成させて、次の仕様を満たしてください。

processTaskは、ランダムで成功または失敗する非同期処理を行う。
0.5以上のランダムな数値が生成された場合は成功し、resolveで「タスク成功！」を返す。
0.5未満の場合は失敗し、rejectで「タスク失敗！」を返す。
javascript
コピーする
編集する
function processTask() {
    return new Promise((resolve, reject) => {
        // ここを埋めてください
    });
}

processTask()
.then((message) => {
    console.log(message); // 出力: タスク成功！
})
.catch((error) => {
    console.error(error); // 出力: タスク失敗！
});
問題3: 複数のPromiseを処理する
次のコードを完成させてください。このコードでは、複数の非同期処理（Promise）を一度に実行し、そのすべてが成功した場合に「すべて成功！」と出力する必要があります。

javascript
コピーする
編集する
function task1() {
    return new Promise((resolve) => setTimeout(() => resolve("タスク1完了"), 1000));
}

function task2() {
    return new Promise((resolve) => setTimeout(() => resolve("タスク2完了"), 2000));
}

function task3() {
    return new Promise((resolve) => setTimeout(() => resolve("タスク3完了"), 3000));
}

Promise. // ここを埋めてください
.then((messages) => {
    console.log("すべて成功！", messages);
})
.catch((error) => {
    console.error("エラーが発生しました:", error);
});
問題4: Promise.allとPromise.raceの違い
次のコードを実行すると、どのような結果が出力されますか？説明もしてください。

javascript
コピーする
編集する
const promise1 = new Promise((resolve) => setTimeout(() => resolve("タスク1完了"), 2000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("タスク2完了"), 1000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => reject("タスク3失敗"), 1500));

Promise.all([promise1, promise2, promise3])
.then((results) => {
    console.log("すべて成功:", results);
})
.catch((error) => {
    console.error("エラー発生:", error);
});

Promise.race([promise1, promise2, promise3])
.then((result) => {
    console.log("最初に完了した:", result);
})
.catch((error) => {
    console.error("最初に失敗した:", error);
});
問題5: finallyの活用
次のコードを完成させて、Promiseが成功または失敗した場合に必ず「処理が終了しました。」と出力されるようにしてください。

javascript
コピーする
編集する
function asyncTask(flag) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (flag) {
                resolve("成功しました！");
            } else {
                reject("失敗しました！");
        }
    }, 1000);
});
}

asyncTask(true)
.then((message) => {
    console.log(message); // 出力: 成功しました！
})
.catch((error) => {
    console.error(error); // 出力: 失敗しました！（flagがfalseの場合）
})
.finally(() => {
    // ここを埋めてください
});
*/
// 問題6: 非同期チェーンの実装
// 次のコードを完成させてください。このコードでは、以下の手順で非同期処理を行います：

// getUserData関数でユーザーデータを取得（1秒後に "ユーザーデータ取得完了" を返す）。
// getPosts関数で取得したユーザーの投稿データを取得（2秒後に "投稿データ取得完了" を返す）。
// 最終的に両方のデータを出力する。

function getUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("ユーザーデータ取得完了");
        }, 1000);
    });
}

function getPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("投稿データ取得完了");
        }, 2000);
    });
}
getUserData().then(val => {
    console.log(val);
    return getPosts();
})
    .then(val => { console.log(val) })
    .catch(error => { console.log(error) });








