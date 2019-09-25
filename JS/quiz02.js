// f
//Re-Form The Word
function getWord(left, right) {
    let word = left + right;
    word = word.split(''); //把它變成array
    let ans = [];
    for (let i = 0; i < word.length; i++) {
        if (i === 0) {
            ans.push(word[0].toUpperCase());
        } else {
            ans.push(word[i]);
        }
    }
    return ans.join('');
}
console.log(getWord("seas", "onal")); //'Seasonal'


//Additive Inverse
let tst = 5;
tst = -tst; //負可以改變，但+號不行唷～

console.log(tst); //-5?


function additiveInverse(arr) {
    return arr.map(x => -x);
}
console.log(additiveInverse([5, -7, 8, 3]));

//Reverse String(recursion)
// function reverse (str) {
//     if (str === "") {
//         return "";
//     } else {
//         return reverse(str.substr(1));
//     }
// }


// console.log('Reverse result: ', reverse("hello"));

//Is Sam with Frodo 檢查sam的前後都不是Frodo就return false
function middleEarth(arr) {
    let pos = arr.indeoxOf('Sam');
    if (arr[pos - 1] === 'Frodo') {
        return true;
    } else if (arr[pos + 1] === 'Frodo') {
        return true;
    } else {
        return false;
    }
}
/*
其他解法：
function middleEarth(arr) {
	return Math.abs(arr.indexOf('Sam') - arr.indexOf('Frodo')) === 1
}
*/

//Matchstick Houses

//matchHouses(0) -> 0
//matchHouses(1) -> 6
//matchHouses(2) -> 6+5
//matchHouses(3) -> 6+5+5
//matchHouses(4) -> 6+5+5+5

//Find the Smallest and Biggest Numbers
function minMax(arr) {
    let arr = arr.sort((a, b) => a - b); //將array由小到大排序
    let minMax = [];
    minMax.push(arr[0], arr[arr.length - 1]);
    return minMax;
}

//Hashes and Pluses return value ->arr
function hashPlusCount(string) {
    let arr = [];
    let hashCount = 0;
    let plusCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '#') hashCount++;
        if (string[i] === '+') plusCount++;
    }
    arr.push(hashCount, plusCount);
    return arr;
}

/*
其他解法：
function hashPlusCount(str) {
	return [str.split('+').join('').length, str.split('#').join('').length]
}
let mark = "Oh brave new world that has such people in it.";
mark = mark.split('a').join('');//移除掉不想要的字的小tip!
console.log(mark);
*/

//Reverse Coding Challenge#3
function remainder(arr, num) {
    let remainder = [];
    for (let i = 0; i < arr.length; i++) {
        remainder.push(arr[i] % num);
    }
    return remainder;
}

//removeNull 
function removeNull(arr) {
    return arr.filter(x => x !== null);
}
//Most Left Digit return value -> num
function leftDigit(str) {
    let found = str.match(/[0-9]/g);
    console.log(found);
    let join = found.join('');

    return +(join[0]);
}
leftDigit("TrAdE2W1n95!");
//Fix the Error: Vowel Edition

function removeVowels(str) {
    return str.replace(/[aeiou]/g, "")
}

console.log(removeVowels("helloAppleu"));//hll

//Exists a Number Higher?
function existsHigher(arr, n) {
    if (arr.length === 0) return false; //檢查空字串的方法不是 arr === []，而是arr.length === 0 
    const findMax = (x, y) => { if (x < y) x = y; return x };
    let max = arr.reduce(findMax, 0);
    return (max >= n) ? true : false;
}

console.log(existsHigher([], 0));

//Smaller String Number //return value should be string

function smallerNum(n1, n2) {
    let result = (+n1 < +n2) ? n1 : n2;
    return result;
}
smallerNum('50', '9');

//canNest  

function canNest(arr1, arr2) {
    if (Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2)) return true;
    return false;
}


/*

canNest([1, 2, 3, 4], [0, 6]) return value true/false
=>
第二個array裡的較大的值需要大於第一個array裡的值，
較小的值需要小於第一個array裡最小的值
我怎麼知道第二個array的值 判斷式

*/
