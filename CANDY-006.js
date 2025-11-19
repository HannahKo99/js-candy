// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

//方法1:排序大小 -> 如果[0]=[1]那filter出陣列最後一個數字,否則filter出陣列第一個數字

function findDifferent(numbers) {
    numbers.sort((a, b) => a - b)
    //如果[0]=[1]，回傳不等於[0]的數字
    if(numbers[0] === numbers[1]){
        return numbers.filter(num => num !== numbers[0])
    }else{
        //如果[0]!=[1]，回傳不等於[1]的數字，因為不相同的數字會在最前面，所以要跟第二個數字不相等
        return numbers.filter(num => num !== numbers[1])
    }
}

console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2])); // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8

//方法2:當某個元素只出現一次時，第一次出現（indexOf）跟最後一次出現（lastIndexOf）的位置會一樣。

function findDifferent(numbers) {
    return numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num))
}

console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2])); // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8
