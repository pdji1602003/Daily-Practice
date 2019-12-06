// Array.concat 可以串聯類array物件
let arr = [1,2];
let arrayLike = {
    0:'something',
    length:1
};
let result = arr.concat(arrayLike, 5, 6);
console.log(result);//[ 1, 2, { '0': 'something', length: 1 }, 5, 6 ]
console.log(typeof result);//object，因為array也是物件的一種
console.log(typeof {});//object
console.log('檢查結果', typeof [] === typeof {});//true=>array也是object的一種，使用typeof無法區分差異
console.log(Array.isArray({}));//false
console.log(Array.isArray([]));//true，使用Array.isArray()方法來檢查，不過要注意瀏覽器支援性

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Array.find()方法:返回array满足提供的测试函数的第一个元素的值，否则返回 undefined。
let users = [
    {id:1,name:'John'},
    {id:2,name:'Pete'},
    {id:3,name:'Mary'}
];
let user = users.find( item => {
    return item.id == 1;
});
console.log(user.name);//John

let arr1 = [5, 12, 4, 8, 20];
let found = arr1.find( element => element > 15);
console.log(found);//20

let inventory = [
    {name:'Apple', quantity:4},
    {name:'Banana', quantity:0},
    {name:'Cherry', quantity:5}
];

function findCherries(item){
    return item.quantity >= 5;
}
console.log('找櫻桃', inventory.find(findCherries));  //{ name: 'Cherry', quantity: 5 }

let vals = ['5', '4', '1', '2', '9'];
let sum = 0;
for (let val of vals) {//這個方法是取得array裡的值
    sum += val; //val指的是vals[i]
    console.log(typeof val);
}
console.log(typeof sum);//string
console.log('總和', sum);//'054129'
//這邊要注意的是，若要將array裡的值相加，可以+將字串轉成數字


//Array.reduce();
const array2 = [1, 2, 3, 4];//10
const reducer = function(accumulator, currentValue){
    return accumulator + currentValue;
    
}
const result2 = array2.reduce(reducer, 10);
console.log('結果2', result2);//20

let number = [10, 12, 4, 10, 9]; 
// number.reduce( callback function );

function findMax(acc, value){ // loop over array裡的value
    if(acc > value) {
        acc = value;
    }
    return acc;
}
let result1 = number.reduce(findMax);
console.log(result1);

// let vals = [5, 4, 1, 2, 9];
// function findMax(acc, val ){
//     if(val > acc){
//         console.log('val= ', val, 'acc= ',acc);
//         acc = val;
        
//     }
//     return acc;
// }
// let result = vals.reduce(findMax); // 函數作為參數傳入時，不用加()


//Array.filter();
let vals2 = [1, 2, undefined, 5, 6];

vals2 = vals2.filter( x => x );// [ 1, 2, 5, 6 ]
console.log('測試結果: ', vals2);

