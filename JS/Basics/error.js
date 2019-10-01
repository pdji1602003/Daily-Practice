/*
問題描述：
試圖在變量宣告前console.log一個變量的值，出現以下報錯訊息：
//game.js:54 Uncaught ReferenceError: Cannot access 'textNodes' before initialization
我困惑的點是，此變量在尚未宣告前就已被一個function declaration(即有名函式)所引用了，為何如此使用就沒有問題？

我認為的可能解釋有下：

*/
function test(){
    console.log(x + 2);//在x晚於function聲明前可以成功取得3為值嗎？
}
//test(); => ReferenceError: x is not defined
// console.log(x);=>x is not defined 
//但報錯原因並非c Cannot access 'textNodes' before initialization是跟x的type有關係嗎？
//上面的textNodes是個array，我們來試試看。
const x = 1;


const obj =[
    {id:1},
    {name:'Mary'},
    {age:18}
]
console.log(obj[0].id);

test(); 
//原來是因為test的調用時間晚於x變量聲明，也才因此在function test裡引用了x此變量，
//是不會出錯的。