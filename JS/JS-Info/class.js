//Class 基本語法

// class Myclass{
//     //class方法 (這指的是只能用在class的方法嗎？)
//     constructor(){ ... }
//     method1(){...}
//     method2(){...}
//     method3(){...}
//     method4(){...}
// }

/* 

然後 new Myclass()來創建具有上述method的新object =>
指的尚未使用new之前，妳的Myclass是standby code，等待著妳下指令去呼叫它。


通過 new 關鍵字來創建object會自動調用constructor()方法，
因此我們可以constructor裡初始化我們的object
可以這樣理解哦=>
其實constructor(){...} 就相當於使用這樣的構造函數去創建物件 function Anyword(){...}
其他method1()...method4()就相當於此構造函數的method屬性。

初始化object指的是，我們在constructor{}定義好我們的object，以供後續使用。
通過new，只會自動調用constructor，其他method不會被調用。

*/

class User{
    constructor(name){
        this.name = name;
    }

    sayHi(){
        alert(this.name);
    }
}

//使用方法：
// let user = new User('John');
// user.sayHi();

class User {
    constructor(name){ this.name = name;}
    sayHi(){
        console.log(this.name);
    }
}

// class is a function
console.log(typeof User); //function

//更精確而言，class是一種原型的的構造方法 prototype constructor method
console.log(User === User.prototype.constructor);//true

//sayHi也是原型的方法
console.log(User.prototype.sayHi);

//實際上，在原型中有兩個方法
console.log(Object.getOwnPropertyNames(User.prototype));//['constructor','sayHi']

//以上寫法相當於 ===>

//創建我們的constructor function
function User(name){
    this.name = name;
}
//任何函數prototype預設即有constructor property, so we don't need to create it.

User.prototype.sayHi = function(){
    console.log(this.name);
}

let user = new User('John');
user.sayHi();