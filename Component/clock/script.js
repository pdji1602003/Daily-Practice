//每1000毫秒(等同於1秒)呼叫setClock function一次
setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');


function setClock(){ 
    //抓取時間
    const currentDate = new Date();
    
    // 設定秒的比例:(抓取目前的時間，並從中取得當前秒數)/60 =>過了多少秒也就代表秒針移動大概多少角度
    const secondsRatio = currentDate.getSeconds()/60;
    
    // 在minutesRatio加上secondsRatio=>因為分針隨著秒針緩步移動的同時也會連帶移動
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60;
    const hoursRatio = (minutesRatio + currentDate.getHours())/12;

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
    
}

/* 

setRotation函數沒有返回值，他是被創建用來更改css style。
他接受兩個參數--html元素以及該html元素的旋轉比例

*/
function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();