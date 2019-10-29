//以querySelector取得帶有[data-label]屬性的元素並將儲放在變數progressBar中
const progressBar = document.querySelector('[data-label]');

//以間隔5毫秒進行以下程式碼
setInterval(update, 5)

function update(){
    const computedStyle = getComputedStyle(progressBar);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
    progressBar.style.setProperty('--width', width + .1) 
}

/*
    為何取得的是width的值，而不是偽元素的width值？
*/


/*
setInterval每次執行都會返回一個特定的timerID，
因為這方法是會以一個時間區隔來不斷地調用作爲timerHandler的function
所以雖然只執行一次(只返回一個timerID)，但卻可以無限地執行下去。
那這就會產生一個問題，我要怎麼去終止setInterval的執行呢？
剛有提到setInterval在執行時會產生一個特定的timerID，
我們就可以利用這組id來調用clearInterval，以終止setInterval的不斷執行。
我覺得可以這麼理解，今天我想終止setInterval的執行，
所以你去找了clearInterval來協助。
那clearInterval就會反問你「我怎麼知道我要終止的是哪個function的不斷執行呢？」
這時你聳聳肩，跟他說「來，這是這個function的id，你就是停止這個id對應的function就對了。」


這時我又產生另外一個問題。
我對呼叫function的理解是，以function()圓括弧表達，才能呼叫一組function，執行它。
可是在setInterval的使用上，我並沒有看到setInterval()的用法。
但他還是被執行了？這是為何？
換個寫法可以比較好理解這個問題。
setInterval(() => {
    const computedStyle = getComputedStyle(progressBar);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    progressBar.style.setProperty('--width', width + .1)
}, 5);

等同於以下寫法：
function update(){
    const computedStyle = getComputedStyle(progressBar);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    progressBar.style.setProperty('--width', width + .1)
}

setInterval(update, 5);

可以這麼理解，setInterval是個是個built-in function，所以其實你在裡頭塞入function時，
就已經調用了setInterval這個function了，只是上面的例子是以匿名函式表達。
*/



