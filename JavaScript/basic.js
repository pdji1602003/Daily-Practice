//This file was created following this tutorial:https://www.youtube.com/watch?v=hdI2bqOjy3c&t=3596s

// Constructor functions & Prototypes
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    // this.getBirthYear = function(){
    //     return this.dob.getFullYear();
    // }
    // this.getFullName = function(){
    //     // 注意中間要有空格
    //     return `${this.firstName} ${this.lastName}`;
    // }
}

Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

//Class:一個syntax sugar(語法糖)，跟以上能達成的事情相同，只是將寫法變得更好看一點
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    //prototype function
    getBirthYear = function () {
        return this.dob.getFullYear();
    }

    //prototype function
    getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object 
// 為何需要這種辦法建構object? 因為使用過往方式沒辦法大量創建相似物件
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person1.getBirthYear());
console.log(person1.getFullName());