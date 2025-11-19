// 編號：CANDY-005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

//把數字拆分變陣列 -> 數字平方 ->陣列變字串 

function squareDigits(num) {
    const numStr = num.toString();
    const numArr = numStr.split('');
    const square = numArr.map(n => n * n);
    const squareArr = square.join("");
    
    return squareArr;
    
}
//gpt精簡版
// // function squareDigits(num) {
//   return num
//     .toString()        // 數字 → 字串
//     .split('')         // 字串 → 陣列
//     .map(n => n * n)   // 每個位數平方
//     .join('');         // 陣列 → 字串
// }

console.log(squareDigits(3212)); // 印出 9414
console.log(squareDigits(2112)); // 印出 4114
console.log(squareDigits(387)); // 印出 96449