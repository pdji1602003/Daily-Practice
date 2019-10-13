/* the ternary operator and switch statements */
// Ternary operator
var firstName = 'John';
var age = 16;
age >= 18? console.log(firstName + 'drinks beer.')
:console.log(firstName + ' drinks juice.');
var drink = age >=18? 'beer' : 'juice';
console.log(drink);
if(age>=18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
console.log(drink);
// Switch statements
var job = 'teacher';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}
var firstName = 'John';
var age = 20;
if (age < 13) {
    console.log(firstName + ' is a boy.');    
} else if (age>=13 && age<20) {
    console.log(firstName +' is a teenager.');
} else if (age>=20 && age<30) {
    console.log(firstName+ ' is a young man.');
} else {
    console.log(firstName+ ' is a man.');
}
var firstName = 'Mark';
var age = 30;
switch(true){
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >=13 && age < 20:
        console.log(firstName +' is a teenager.');
        break;
    case age >=20 && age < 30:
        console.log(firstName+ ' is a young man.');
        break;
    default:
        console.log(firstName+ ' is a man.');
}
/* Truthy and Falsy values and equality operators */
// Falsy values : undefined, null, 0, '', NaN
// Truthy values : NOT falsy values

var height;
height = 23;
if (height || height === 0) {
    console.log('Variable is defined.');
} else {
    console.log('Variable has NOT been defined.');
}
if (height == '23') {
    console.log('The == operator does type coercion!');
}
/* Coding Challenge 2 */
var JohnsTeam = (89+120+103)/3;
var MikesTeam = (116+94+123)/3;
console.log(JohnsTeam);
console.log(MikesTeam);
console.log(JohnsTeam, MikesTeam);
var winner = JohnsTeam > MikesTeam;
if(winner == true) {
    console.log('John\'s team is the winner.' );
}else {
    console.log('Mike\'s team is the winner.');
}
var MarysTeam = (97+134+105)/3;
console.log(MarysTeam);
if(MarysTeam > JohnsTeam && MarysTeam > MikesTeam) {
    console.log('Mary\'s team is the winner.');
}
/* Functions */
function calculateAge(birthyear){
    return 2019 - birthyear; //僅2019 - birthyear並無法使function判別你要此function進行什麼工作，必須加上關鍵字return
}

var ageLinyin = calculateAge(1992);
console.log(ageLinyin);

function yearsUntilRetirement(year,firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(firstName + ' retires in '+ retirement +' years.');
}

/* Function Statement and Expressions */
//Initialise new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990,1992,1993);

console.log(names[0]);
console.log(names.length);

//Mutate array data

names[1]='Ben';//改變數據
names[names.length]='Mary'//變更數據位置
console.log(names);

//Different data types

var john = ['john', 'smith', 1990, 'teacher', false];
john.push('blue');//在陣列的結束處新增data
john.unshift('Mr.');//在陣列的起始處新增data
console.log(john);



john.pop();//移除陣列結束處的data，無需在括弧內填入確切數據，可留空讓程式替你作業
john.pop();//重複兩次pop會移除兩個數據
john.shift();//移除陣列開頭的數據
console.log(john);
console.log(john.indexOf(1990));//當使用indexOf查詢數據位置時，若查詢的數據不在該陣列中，則結果會顯示-1

var isDesigner = john.indexOf('designer') === -1? 'John is NOT a designer.':'John IS a designer.';
console.log(isDesigner);



//Coding challenge 3

var bill1 = 124;
var bill2 = 48;
var bill3 = 268;
function tipCalculator(bill){
    if(bill < 50 ) {
        return bill * 0.2;
    } else if (bill >50 && bill < 200){ //bill應該要>=50，否則沒有涵蓋到50此數值
        return bill * 0.15;
    } else {
        return bill * 0.1;
    }
}
var tip1 = tipCalculator(124); //tipCalculator前不用關鍵字function
var tip2 = tipCalculator(48);
var tip3 = tipCalculator(268);
var tips = [tip1,tip2,tip3];
console.log(tips);
var billTotal1 = bill1+tip1;
var billTotal2 = bill2+tip2;
var billTotal3 = bill3+tip3;
var billTotal = [billTotal1,billTotal2,billTotal3];
console.log(billTotal);

//solution by the teacher
function tipCalculator(bill){
    var percentage;//先宣告此變數，但不賦予值，是為了往後變動方便。如下例，percentage會隨著條件變動，因此不用在最初賦予值
    if(bill < 50){
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return bill * percentage;
}
var bills = [124,48,268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];//陣列裡也可以包function

var finalValues = [
    tips[0]+bills[0],
    tips[1]+bills[1],
    tips[2]+bills[2]
];//陣列裡也可以進行陣列算式
console.log(tips, finalValues);


//Objects and properties
var john = {
    firstName:'John',
    lastName:'Smith',
    birthYear: 1990,
    family:['Jane','Mark','Bob','Emily'],
    job:'teacher',
    isMarried:false
}
console.log(john);
//using dot notation or bracket notation to access data
console.log(john.job);
console.log(john['job']);

var john = {
    firstName:'John',
    lastName:'Smith',
    birthYear: 1990,
    family:['Jane','Mark','Bob','Emily'],
    job:'teacher',
    isMarried:false,
    calcAge: function(birthYear) {
        this.age = 2018 - this.birthYear; 
    } //calcAge計算的結果，直接儲存在物件屬性裡
};

john.age = john.calcAge();
console.log(john);
console.log(john.calcAge(1990));

// Coding challenge 4 
/* 
1. For each of them, create an object with properties 
for their full name, mass and height. 
2. Then, add a method to each object to calculate their BMI.
Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI,
together with the full name and the respective BMI. 
Don't forget they might have the same BMI.    

*/
var john = {
    fullName:'John Smith',
    mass:110,
    height:1.95,
    calcBMI: function(){ //function內也可以不用加入任何參數
        this.BMI = this.mass / (this.height * this.height);//定義為這行程式做了什麼之後，需要把結果儲存在一個變數裡
        return this.BMI;
    }
};
john.calcBMI()  //為了讓function執行工作，你必須呼叫function

var mark = {
    fullName:'Mark Miller',
    mass:78,
    height:1.69,
    calcBMI: function(){ 
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
        //也可以直接寫成return this.mass/ (this.height * this.height);
    }
};
mark.calcBMI();
console.log(mark.calcBMI());
console.log(john,mark);
//方法A
if (john.BMI > mark.BMI){
    console.log('John has the higher BMI of '+john.BMI);
}else if (mark.BMI > john.BMI) {
    console.log ('Mark has a higher BMI of ' + mark.BMI);
}else {
    console.log('John and Mark have the same BMI.');
};
//方法B
if (john.calcBMI() > mark.calcBMI()){ //方法B得以實踐，是因為在定義在物件裡的函式，其值有用關鍵字return回傳，故在if...else裡呼叫即可以得到計算後的BMI結果
    console.log('John has the higher BMI of '+john.BMI);
}else if (mark.BMI > john.BMI) {
    console.log ('Mark has a higher BMI of ' + mark.BMI);
}else {
    console.log('John and Mark have the same BMI.');
};
// Loops and Iteration
// One of the control structures 用在需重複進行的工作事項上(repetitive tasks)
for ( var i = 0; i<10; i++){
    console.log(i);
}
/* 
上述代碼的意思為：
i = 0，且 0<10 true, log i to the console, i++,
i = 1，且 1<10 true, log i to the console, i++,
i = 2，且 2<10 true, log i to the console, i++
.
.
.
i = 10，但 10<10 false, exit the loop!
*/
var john = ['john', 'smith', 1990, 'teacher', false];
console.log(john[0]);
console.log(john[1]);
console.log(john[2]);
console.log(john[3]);
console.log(john[4]);//此做法非常不具備效率！
var john = ['john', 'smith', 1990, 'teacher', false];
for ( var i = 0; i<john.length;i++){
    console.log(john[i]);
}
// while loop
var i = 0;
while(i<john.length){
    console.log(john[i]);
    i++;
}
//continue and break statements

var john = ['john', 'smith', 1990, 'teacher', false];
for ( var i = 0; i<john.length;i++){
    if (typeof john[i] !== 'string') continue; // 原本的寫法為 (typeof john[i] !== 'string') {continue}，此處的大括號可以省略
    console.log(john[i]);
}
 /* 
 
 一開始我對continue的理解為如下：
 continue的意思不能理解成繼續進行當前正在進行的工作，
 反而必須理解成“跳出當前迴圈，直接進行下一個工作”
 但以上的想法似乎是錯的。正確的理解應該是，
 for這個迴圈碰到不滿足讓迴圈得以進行的條件時可以中斷，
 但會繼續進行下次迴圈，這便是continue的作用；
 break則是會完全中斷迴圈進行，迴圈不會再去查看接續的data 
 
 */
var john = ['john', 'smith', 1990, 'teacher', false];
for ( var i = 0; i<john.length;i++){
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Coding Challenge 5 

/*
This time John and his family went to 5 different restaurants. The bills
were $124, $48, $268, $180 and $42.

John likes to tip 20% of the bill when the bill is less than $50, 
15% when the bill is between 50 and 200, 20% when the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values.
2. Add a method to calculate the tip.
3. This method should include a loop to iterate over all the paid
bills and do the tip calculation.
4. As an output, create 
    1) a new array containing all tips
    2) an array containing final paid amounts(bill+tip)
    HINT:Start with two empty array as properties and then 
    fill them up in the loop. 
**Loop的存在即是定義出一個循環機制->想出上述問題中需要被循環的事情是什麼？
 */
var john = {
    fullName:'John Smith',
    bill:[124, 48,268,180,42],
    tipCalculator: function(){ //我要如何知道何時要讓function帶參數，而何時不用？btw.這是一個method
        this.tips = [];
        this.finalValues = [];
        
        for ( i =0; i<this.bill.length; i++ ){ //如果沒有註明this.bill，而是寫bill，則在console裡bill會顯現為undefined
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bill[i];
            if (bill <50) {
                percentage =.2;
            }else if (bill>=50 && bill<=200){
                percentage =.15;
            } else {
                percentage = .1;
            }  
            // Add results to the corresponding arrays 
            this.tips[i] = bill* percentage;//bill*percentage這行會置放在for迴圈裡，是因為bill是在for迴圈裡被定義的？
            this.finalValues[i] = bill + bill*percentage;//若finalValues後沒有添加[i]，則只會顯示最後一個結果，也就是最後一筆最終結帳金額(42那筆)
        }
    }
} 

tipCalculator();//正確寫法應該是john.tipCalculator();需要寫明這個function是john的！！！
john.tipCalculator();
console.log(john);
/*
Extra after finishing:Mark's family also went on holiday, 
going to 4 different restaurants. 
The bills were $77, $375, $110 and $45.

Mark likes to tip 20% of the bill when the bill values
is less than $100, 10% when the bill values is between 
$100 and $300, and 25% if the bill is more than $300
(different than John).

5.Implement the same functionality as before, 
this time using Mark's tipping rules.



6. Create a function(not a method) to calculate ->在物件裡的function叫method?
the average of a given array of tips. ->會產生值，所以得用函式運算式
HINT:Loop over the array, and in each iteration
store the current sum in a variable (starting from 0).
After you have the sum of the array, divide it by 
the number of the elements in it
(that's how you calculate the average).




7.Calculate the average tip for each family.
8.Log to the cnosole which family paid the higher tips on average.

 */

//你要使用var，是因為你要儲存值(var是個容器)；
//在使用任何變數前，都要先宣告它，否則會在console顯示undefined
//可是卻可以先呼叫函式，再去定義函式，對嗎？

var mark = {
    fullName:'Mark Miller',
    bill:[77,475,110,45],
    tipCalculator: function() {
        this.tips = [];
        this.finalValues = [];
       
        for(i=0; i<this.bill.length;i++) {// ‘.’也是一個運算元，代表成員訪問
             //Determine percentage based on tipping rules
            var percentage;
            var bill = this.bill[i];
            if(bill<100) {
                percentage = .2;
            }else if(bill>=100 && bill<=300){
                percentage = .1;
            } else {
                percentage = .25
            }
            //Add the results to the arrays
            this.tips[i]= bill* percentage;
            this.finalValues[i]= bill+bill* percentage;
        }
    }
}
mark.tipCalculator();
console.log(mark);
console.log(mark.tips);
// 6. 創造出一個function去計算任一家族小費的平均值





var step;
for (step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking east one step');
}

alert(step);


