const baseURL = "https://zipcloud.ibsnet.co.jp/api/search";
const zipcode = "2430014";
const url = `${baseURL}?zipcode=${zipcode}`;
//HTTPのGETメソッドに https://zipcloud.ibsnet.co.jp/api/search?zipcode=2430014 のデータを取り寄せる
//HTTPからJSON形式のデータが送られてくるので、それをJavaScriptのオブジェクトに変換する

console.log("Start");
(async () => {
    try {
        const res = await fetch(url);
        if (res.ok) {
            const data = await res.json();
            console.log(data.results);
        }
    } catch (err) {
        console.log(err);
    }
})();
console.log("End");
