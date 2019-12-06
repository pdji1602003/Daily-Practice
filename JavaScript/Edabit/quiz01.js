//Capture the Rook
//思路流程就是：arr[0], arr[1]，任何值相等，return true, 不然就是return false 

function canCapture(arr) {
    let join = arr.join(''); //將array轉換成無空格的字串
    for (let i = 0; i < join.length; i++) { //設定兩個迴圈讓元素一一進行比較
        for (let j = i + 1; j < join.length; j++) { //j=i+1是因為j的起始值就是i的下一個數值 
            if (join[i] === join[j]) {
                return true;
            }
        }
    }
    return false;
}

let testCase1 = canCapture(["A8", "E8"]) // true
let testCase2 = canCapture(["A1", "B2"]) // false
console.log(testCase1, testCase2);//true, false


//Unlucky 13
//思路流程：loop over array裡面的每個元素，如果可以被13整除，就踢除該元素，若否則保留

function unlucky13(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 13 !== 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(unlucky13([91, 286, 416, 884, 1229]));

//參考答案：
// const unlucky13 = arr => arr.filter(num => num % 13 !== 0);



//Semantic Versioning/return value是字串

function retrieveMajor(semver) {
    let split = semver.split('.');
    return split[0];
}
function retrieveMinor(semver) {
    let split = semver.split('.');
    return split[1];
}
function retrievePatch(semver) {
    let split = semver.split('.');
    return split[split.length - 1];
}

//Check if the Same Case:大小寫混合就return false

function sameCase(str) {
    if (str === str.toUpperCase()) {
        return true;
    } else if (str === str.toLowerCase()) {
        return true;
    } else return false;
}

//Next Element in Arithmetic Sequence

//nextElement([3, 5, 7, 9]) ➞ 11
//nextElement([-5, -6, -7]) ➞ -8

function nextElement(arr) {
    if (arr[arr.length - 1] === arr[arr.length - 2]) return arr[arr.length - 1];
    return (arr[arr.length - 1] - arr[arr.length - 2]) + arr[arr.length - 1];
}

//Word Endings
function addEnding(arr, ending) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] += ending;
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(addEnding(['new', 'pander', 'scoop'], 'er'));
/* 參考作法：

function addEnding(arr, ending) {
	return arr.map(word => word + ending);
}
*/







