// 只有單一個constructor function可作為default輸出
export default class User {
	constructor(name, age){
		this.name = name
		this.age = age
	}
}

// 其餘function僅需使用export即可輸出
export function printName(user){
	console.log(`User's name is ${user.name}`)
}

export function printAge(user){
	console.log(`User's is ${user.age} years old`)
}