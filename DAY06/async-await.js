/*
function createPromise(flag, id, delay) {
    if (delay === undefined) delay = 0;
    return new Promise((resolve, reject) => {
        if (flag) resolve(`${id}:成功`);
        else reject(`${id}:失敗`);
    });
}
// 関数を宣言するときにasyncを付けると 非同期関数になる
async function asyncFunc() {
    try {
        // Promiseオブジェクトの前にawaitを付けると
        // Promiseがfullfilledかrejectedになるまで次の文の実行を待機する
        const result1 = await createPromise(true, 1, 1000);
        //fullfilledの場合は、then()のコールバック関数に渡す値(=resolve()の値)を戻り値として返す
        console.log("result1を実行", result1);
    } catch {
        //rejectedの場合は、catch()のコールバック関数に渡す値(reject()の値)を、catch句で捕捉する
        console.log(error);
    }
};
asyncfunc();
function createPromise(flag, id, delay) {
    if (delay === undefined) delay = 0;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (flag) resolve(`${id}:成功しました`);
            else reject(`${id}:失敗しました`);
        }, delay);
    });
}
async function asyncFunc() {
    try {
        //同期処理と同じように上から順番に実行する
        console.log(await createPromise(true, 1,3000));
        console.log(await createPromise(true, 2,2000));
        console.log(await createPromise(true, 3,1000));
    } catch (error) {
        console.error(error);
    }
}
asyncFunc();
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("データ取得完了！");
        }, 2000);
    });
}
(async function asyncFunc() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
})();
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; // 50%の確率で成功または失敗
            if (success) {
                resolve("データ取得成功！");
            } else {
                reject("エラーが発生しました！");
        }
    }, 1000);
});
}

(async function asyncFunc() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
})();
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("ユーザー情報取得完了");
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

(async function asyncfunc() {
    try {
        const result1 = await getUser();
        const result2 = await getPosts();
        console.log(result1);
        console.log(result2);
    } catch (error) {
        console.error(error);
    }
})();
function task1() {
    return new Promise((resolve) => setTimeout(() => resolve("タスク1完了"), 1000));
}

function task2() {
    return new Promise((resolve) => setTimeout(() => resolve("タスク2完了"), 2000));
}

function task3() {
    return new Promise((resolve) => setTimeout(() => resolve("タスク3完了"), 3000));
}
(async function asyncFunc() {
    try {
        // const result1 = await task1();
        // const result2 = await task2();
        // const result3 = await task3();
        // console.log(result1, result2, result3);
        
        const result = await Promise.all([task1(), task2(),task3()]);
        console.log(result)
        
    } catch (error) {
        console.log(error)
    }
})();
function fetchData1() {
    return new Promise((resolve) => setTimeout(() => resolve("データ1取得完了"), 1000));
}

function fetchData2() {
    return new Promise((resolve, reject) => setTimeout(() => reject("データ2取得失敗"), 2000));
}

function fetchData3() {
    return new Promise((resolve) => setTimeout(() => resolve("データ3取得完了"), 3000));
}

(async function asyncFunc() {
    try {
        const results = await Promise.all([fetchData1(), fetchData2(), fetchData3()])
        console.log(results);
    } catch (error) {
        console.log(error);
        
    }
})();
async function fetchWithRetry(url, retries = 3) {
    try {
        const response = await fetch(url); // fetchでリクエスト
        if (!response.ok) {
            throw new Error(`HTTPエラー: ${response.status}`);
        }
        return await response.json(); // 成功時はJSONを返す
    } catch (error) {
        if (retries > 0) {
            console.log(`リトライ中... 残り回数: ${retries}`);
            return fetchWithRetry(url, retries - 1); // 再帰的に呼び出す
        } else {
            throw new Error("リトライ回数を超えました");
    }
}
}

async function main() {
    try {
        const data = await fetchWithRetry("https://jsonplaceholder.typicode.com/users/1");
        console.log("データ取得成功:", data);
    } catch (error) {
        console.error("最終エラー:", error.message);
    }
}

main();
*/
const zipcodes = [
    "2430014",
    "2430015",
    "2430016",
    "2430017"
];
(async () => {
    const baseurl = "https://zipcloud.ibsnet.co.jp/api/search";
    const addressMap = new Map();
    for (const zipcode of zipcodes) {
        const url = `${baseurl}?zipcode=${zipcode}`;
        try {
            const res = await fetch(url);
            //fetch関数の戻り値はResponseオブジェクト
            //HTTPレスポンスのbody部分にJSON形式のデータが入ってる
            //リクエストを送って、そのURLに該当するデータがなくてもレスポンスが返ってきている
            const data = await res.json();
            if (res.ok) {//Responseオブジェクトの
                // const {
                //     results:
                //     [
                //         {
                //             address1,
                //             address2,
                //             address3,
                //         }
                //     ]
                // } = await res.json();
                const {address1, address2, address3 } = data.results[0];
                addressMap.set(zipcode, `${address1}${address2}${address3}`);
            }
        } catch (error) {
            console.log(error);
        }
    }
    console.log(addressMap);    
})();







