// // 編號：CANDY-004
// // 程式語言：JavaScript
// // 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

function humanReadableTimer(seconds) {
    const hour = Math.floor(seconds / (60*60));
    const minute = Math.floor((seconds % (60*60) / 60))
    // % 取小時剩下的秒數. /60轉換成分鐘 .  Math.floor取整數
    // const minute = Math.floor(hour / 60);<--出錯，會一直等於0
    const second = seconds % 60;

    // 因為時分秒都要是兩位數，若遇到一位數字需要在前面補零
    let HH ;
     if (hour < 10 ){
        HH = "0" + hour;
        }else {
        HH = ""+hour;
        }
    
    let MM ;
     if (minute < 10 ){
        MM = "0" + minute;
        }else {
        MM = ""+minute;
        }
    
    let SS ; 
        if (second < 10 ){
        SS = "0" + second;
        }else {
        SS = ""+second;
    }

    // const HH = (hour).padStar(2, "0");
    // const MM = (minute).padStar(2, "0");
    // const SS = (second).padStar(2, "0");
    // chatgpt 提供的補零版本

    return `${HH}:${MM}:${SS}`;
}

console.log(humanReadableTimer(0)); // 印出 00:00:00
console.log(humanReadableTimer(59)); // 印出 00:00:59
console.log(humanReadableTimer(60)); // 印出 00:01:00
console.log(humanReadableTimer(90)); // 印出 00:01:30
console.log(humanReadableTimer(3599)); // 印出 00:59:59
console.log(humanReadableTimer(3600)); // 印出 01:00:00
console.log(humanReadableTimer(45296)); // 印出 12:34:56
console.log(humanReadableTimer(86399)); // 印出 23:59:59
console.log(humanReadableTimer(86400)); // 印出 24:00:00
console.log(humanReadableTimer(359999)); // 印出 99:59:59

