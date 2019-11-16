
const data = [
	{
		"word": "hello",
		"phonetic": [
			"həˈləʊ",
			"hɛˈləʊ"
		],
		"meaning": {
			"exclamation": [
				{
					"definition": "used as a greeting or to begin a telephone conversation.",
					"example": "hello there, Katie!"
				}
			]
		}
	}
]
function findNested(obj, key, memo) {
	var i,
		proto = Object.prototype,
		ts = proto.toString,
		hasOwn = proto.hasOwnProperty.bind(obj);

	if ('[object Array]' !== ts.call(memo)) memo = [];

	for (i in obj) {
		if (hasOwn(i)) {
			if (i === key) {
				memo.push(obj[i]);
			} else if ('[object Array]' === ts.call(obj[i]) || '[object Object]' === ts.call(obj[i])) {
				findNested(obj[i], key, memo);
			}
		}
	}

	return memo;
}





function Human(name) {
	this.name = name;
	console.log(name);
}
Human('Jack');
console.log(typeof Human.prototype);
console.log(Human.__proto__.constructor);

const numberCollections = [1, [2, [4, [5, [6]], 3]]];
// to get the number 6
const currentNum = numberCollections[1];//nested的在位置[1]
console.log(currentNum);


function find(array, criteriaFn) {
	let current = array;//目前檢查的值
	let next = [];//尚未檢查到的值(可能是個array)

	while (current || current === 0) {
		//若current已經通過criteriaFn的測試，則返回該值，整個function結束
		if (criteriaFn(current)) {
			return current
		}
		//若以上的if語句還沒有找到符合條件的值，則繼續往下找
		//若我們正在檢查的值剛好是個array，則將current array裡的值一一push出來給next
		if (Array.isArray(current)) {
			for (let i = 0; i < current.length; i++) {
				next.push(current[i])
			}
		}

		//next將第一個值賦予給current，返回第一個if條件檢查
		current = next.shift()
	}
	//都沒找到，返回空值
	return null
}


const newArray = [1, 2, 3, 4];
const firstElement = newArray.pop();
console.log('最後一個元素：', firstElement);


const obj ={};
console.log(obj);
console.log('原型是誰', obj.prototype);

// window.open('https://google.com')目前彈跳視窗一律被瀏覽器封鎖



// testBrowser();
//documentevent delegation 搭配e.target.matches使用
//不要讓你的js dependant on html structure
//closest() 放dataset在那個你想修改的元素上 然後去修改他


console.log(typeof (2+2+'1'));
console.log(2+2+'1');


