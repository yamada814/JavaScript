/*
import fs from "fs";
const filePath = "sample.json";
try {
    const data = fs.readFileSync(filePath);
    const obj = JSON.parse(data);
    console.log(obj.num);    // 1
    console.log(obj.str);    // aaa
    console.log(obj.empty);  // null
    console.log(obj.bool);   // true
    console.log(obj.obj);    // {key: 'value'}
    console.log(obj.arr);    // [1, 'a', null, true, { key: 'value'}]
} catch (error) {
    console.log(`${filePath}が読み込めません`);
    console.log(error);
}
*/
import fs from "fs";
try {
    const data = fs.readFileSync("weather.json");
    const {
        location: { localtime, name },
        current: { temp, condition }
    } = JSON.parse(data);
    console.log(`${localtime}頃の${name}の気温は${temp}℃、天候は${condition}です`);
} catch (error) {
    console.log("ファイルを読み込めませんでした")
}
