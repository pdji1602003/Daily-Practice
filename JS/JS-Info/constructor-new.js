//構造函數 & "new"

/*
    1.構造函數首字以大寫命名。(有別於一般常規函數採用駝峰式命名)
    2.只能用操作符"new"來執行。(有別於一般常規函數只需使用圓括弧即可執行)
*/
function User (name) {
    this.name = name;//把這個this理解成我們要創建的物件
    this.admin = false;
}

let user1 = new User("Jack");

console.log(user1.name);
console.log(user1.admin);
console.log(Object.values(user1));//Jack, false

//以上 new User(...)執行時，相同於做了以下事情

function User(name) {
    // this = { }; 隱式創建一個物件

    // 添加屬性給this
    this.name = name;
    this.admin = false;

    // return this; 隱式返回this的值
}

/* 
通常構造函數沒有return語句，
因為構造函數的任務就是將所有必要的東西寫入this，
並將其自動轉換成結果。

但當碰到有return語句的情況時，則採用以下規則：
return值為一個object時，則該object被作為結果return，而不是this的值，
若不是上述情況，則採用this的值。請看以下範例：
*/

function BigUser(){
    this.name = 'John';
    return { name:'Mary'};
}
console.log(new BigUser().name);//Mary

//省略原括號 (若User沒有參數的情況下))
let user = new User; // let user = new User();

// 構造函數中傳入 method

function User(name){
    this.name = name;
    this.sayHi = function(){
        console.log('My name is '+ this.name);
    };
}

// execute function的方法一
new User('John').sayHi();

// execute function的方法二
let mary = new User('Mary');
mary.sayHi(); //My name is Mary

//創建new Calculator

// function Calculator(){
//     this.read = prompt('Please the first number.'); //我卡在怎麼將兩個prompt的值寫入this.read裡
//     this.sum = function(){
//         return ;
//     };
//     this.mul = function(){
//         return ;
//     };
// }

function Calculator(){
    this.read = function(){
        this.a = Number(prompt('Please enter the first number.'));
        this.b = Number(prompt('Please enter the second number.'));
    }
    this.sum = function(){
        return this.a + this.b;
    }
    this.mul = function (){
        return this.a * this.b;
    }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

//創建 new Accumulator 
// function Accumulator(startingValue){
//     this.startingValue = startingValue;
//     this.read = function(){
//         this.newValue = Number(prompt('Please enter a number.'));//返回的新數值
//         this.value += this.newValue;//this.value這時應該是undefined
//     }
//     this.value = (this.value + this.startingValue);
// }

function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        this.value += Number(prompt('How much to add?', 0));//返回的新數值
    }
}

let accumulator = new Accumulator(1); // 初始 value 1
accumulator.read(); // 添加用户输入 value
accumulator.read(); // 添加用户输入 value
console.log(accumulator.value); // 显示这些值的总和

