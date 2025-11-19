// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

//filter出兩個陣列，一個沒有零、一個只有零，最後合併陣列

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

function moveZerosToEnd(arr) {
  // 程式碼寫在這裡
    const elseArr = arr.filter(item => item !== 0);
    const zeroArr = arr.filter(item => item === 0); //如果用 ==，布林 false 也會被視為零
    const result = elseArr.concat(zeroArr);
    return result;
}

let result = moveZerosToEnd(list);
console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]