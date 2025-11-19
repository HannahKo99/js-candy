// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如：
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24

// 排序-取數-相加

function sumOfSmallestValues(arr) {
    arr.sort(function (a, b) {
        return a - b ;        
    });  
    // 先將陣列由小到大排序
    
    const list = arr.slice(0, 2)
    // 取前兩位數 ->array.slice(start, end)start：起始位置（從哪個 index 開始取）end：結束位置（但不包含 這個 index 的值！）從 start 開始，一直到「end 之前」。
    const sum = list.reduce((acc, cur) => acc + cur, 0);
    return(sum);
    
}

const list1 = [19, 5, 42, 2, 77];
const list2 = [23, 15, 59, 4, 17];



console.log(sumOfSmallestValues(list1)); // 印出 7
console.log(sumOfSmallestValues(list2)); // 印出 19