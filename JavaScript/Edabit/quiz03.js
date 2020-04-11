// evenOddPartition([5, 8, 9, 2, 0]) ➞ [[8, 2, 0], [5, 9]]

// function evenOddPartition(arr) {
// 	if (arr.length < 1) return [[], []]
// 	let evenArray = []
// 	let oddArray = []
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] % 2 === 0 || arr[i] === 0) {
// 			evenArray.push(arr[i])
// 		} else {
// 			oddArray.push(arr[i])
// 		}
// 	}
// 	return [evenArray, oddArray]
// }

// const arr = [
//   [1, 0, 0],
//   [0, 1, 0],
//   [0, 0, 1]
// ]

// const flattedArray = arr.flat(2)
// console.log(flattedArray)

// function reverseImage(image){
// 	return image.map(v => v.map(num => +!num))
// }

// function makePlusFunction(baseNum){
// 	return function(num){
// 		return baseNum + num
// 	}
// }

// function getExtension(arr) {
// 	return arr.map( file => file.split('.')[1])
// }

// function sum(array) {
// 	let sum = 0
// 	for (let i = 0; i < array.length; i++) {
// 		sum += array[i]
// 	}
// 	return sum
// }

// sum([1, 2, 3, 4])


// function accumulatingArray(arr) {
// 	if (arr.length < 1) return []
// 	let resultArray = []
// 	for (let i = 1; i <= arr.length; i++) {
// 		let temp = arr.slice(0, i)
// 		let result = sum(temp)
// 		resultArray.push(result)
// 	}
// 	return resultArray
// }

// const t = accumulatingArray([1, 2, 3, 0, 0, 1])
// console.log(t);

//[1, 2, 3, 4]) ➞ [1, 3, 6, 10]

// const accumulatingArray = arr => {
//   let sum = 0;
//   return arr.map(num => (sum += num));
// };

// function convertCartesian(x, y) {
// 	let result = []
// 	for (let i = 0; i <= x.length; i++) {
// 		for (let j = 0; j <= y.length; j++) {
// 			let a = [x.splice(0, 1), y.splice(0, 1)].flat(1)
// 			result.push(a)
// 		}
// 	}
// 	return result
// }
// //接受兩個array
// const t = convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0])
// console.log(t)

// class Person {
// 	constructor(name, age){
// 		this.name = name
// 		this.age = age
// 	}

// 	compareAge(other){
// 		if(other.age > this.age){
// 			return `${other.name} is older than me.`
// 		} else if(other.age === this.age){
// 			return `${other.name} is the same age as me.`
// 		} else {
// 			return `${other.name} is younger than me.`
// 		}
// 	}
// }

// 

// function chatroomStatus(users) {
// 	if (users.length < 1) {
// 		return "no one online"
// 	} else if (users.length == 1) {
// 		return "users[0] online"
// 	} else if (users.length == 2) {
// 		return "users[0] and users[1] online"
// 	} else {
// 		return `users[0] and users[1] and ${users.length - 2 } more online`
// 	}
// }

// function century(year) {
// 	if (year % 100 === 0) {
// 		const result = parseInt(year / 100)
// 		return `${result}th century`
// 	} else {
// 		const result = parseInt(year / 100)
// 		return `${result + 1}th century`
// 	}
// }



// let magic = (() => {
// 	//回傳一個物件
// 	return {
// 		trim:function(string){
// 			return string.trim()
// 		}, 
// 		length:function(string){
// 			return string.length
// 		}, 
// 		slice:function(arr, start, end){
// 			return arr.slice(start, end)
// 		}, 
// 		replace:function(str, char1, char2){
// 			return str.replace(char1, char2)
// 		}
// 	}
// })();
// const t = magic.trim("  hello")
// console.log(t);


// 透過function創造一個類
// function Book(author, published){
// 	this.author = author
// 	this.published = published
// }

// // 透過literal object創造一個類
// const Author = {
// 	name:this.name, 
// 	books:this.books
// }

// // 透過new function創造一個類
// const Publisher = new function(authors, books){
// 	this.authors = authors, 
// 	this.books = books
// } 

// // 透過class創造一個類
// class Review {
// 	constructor(rating, user){
// 		this.rating = rating, 
// 		this.user = user
// 	}
// }

// function sum(n){
// 	let result = 0
// 	for (let i = 0; i <=n ; i++) {
// 		result += i
// 	}
// 	return result
// }

// console.log(sum(5))


function evenOddTransform(arr, n) {
	for (let value of arr) {
		if(value % 2 != 0 && value !=0 ){ //奇數
			 value += n*2
			 arr.push(value)
		} else {
			value += n*(-2)
			arr.push(value)
		}
		return arr
	}
}

function getExtension(arr) {
	return arr.map(file => file.split('.').slice(-1).join())
}

console.log(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"]))


