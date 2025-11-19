// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

//句子分割成字母陣列 -> 字母陣列再分割成單字陣列 ->取得字母unicode -> 使 a=1 ->  相加 -> 選出最高分 -> 回找單字

function highestScoreWord(input) {
    const words = input.split(' ');

    const letterNum = words.map(word => word.split('').map(letter => (letter.charCodeAt(0)) - 96));// 外層map篩每個單字,內層map 篩每個字母
    
    const scoresPlus = letterNum.map(scores => scores.reduce((acc,cur) => acc + cur, 0));//二維陣列裡運算都要先map進去
    
    const maxScore = Math.max(...scoresPlus);//...展開運算子,把陣列拆成單獨的元素

    const refindWord = scoresPlus.indexOf(maxScore);//找出maxScore在陣列scoresPlus第一次出現的位置

    return words[refindWord]
    
}
//gpt簡化版:
// function highestScoreWord(input) {
//   return input
//     .split(' ') 
//     .map(word => [word, word.split('').reduce((sum, l) => sum + l. charCodeAt(0) - 96, 0)]) 
//     .reduce((max, curr) => curr[1] > max[1] ? curr : max, ['', 0])[0]; 
// }

console.log(highestScoreWord("lorem ipsum dolor sit amet")); // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")); // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")); // 印出 there


    // const letterArr = words.map(word => word.split(''))
    // const letterNum = letterArr.charCodeAt(0)
    // map新陣列:[['a','b'],[],] letterArr是二維陣列，.charCodeAt()是用在字串，不能對陣列使用

