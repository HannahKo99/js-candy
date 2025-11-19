// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

// 字母變數字(unicode) -> 找缺失數字及值之間的差 -> 取得缺失unicode -> 轉為字母 

const chars1 = ["a", "b", "c", "d", "f", "g"];
const chars2 = ["O", "Q", "R", "S"];

function missingChar(chars) {
    const numStr = chars.map(function (letter) {
        return letter.charCodeAt(0)
    });
    // console.log(numStr);
    for (let i = 0; i < numStr.length - 1; i++) {
        const currentNum = numStr[i]
        // const currentNum = numStr(i) 是「把 i 當作函式參數去呼叫 numStr」,陣列不能用 (i) 來存取元素。numStr[i] 會拿出陣列中 第 i 個元素的值

        const nextNum = numStr[i + 1]
        //const nextNum =currentNum + 1 跟下面的if打架，所以判斷式永遠不成立 → return 從未被執行 → 函式最後就回傳 undefined
        if (nextNum - currentNum !==1) {
            const missingNum = currentNum + 1
            // return後面一定要加值
            const missingLetter = String.fromCharCode(missingNum);
            return missingLetter;
        }
    }         
}
    


console.log(missingChar(chars1)); // 印出 e
console.log(missingChar(chars2)); // 印出 P

// 提示：
// 可使用字串的 charCodeAt 方法...