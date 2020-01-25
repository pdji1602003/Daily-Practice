// Module Wrapper Function
// (function (exports, module, __dirname, __filename){
  // Module code actually live here
// })
/*
	在module的code被執行之前，Node.js會把所有的code包覆在一個function wrapper裡面如上
	藉由這種做法，Node.js實際上想達到以下幾項事情：
	1. it keeps top-level variable scoped to the module rather than the global object ex. process
	如此做法可以將在最頂層的變數，其領域維持在該module之中，而不是global object
	2. it helps to provide global-looking variables that are actually specific to the module, 
	簡而言之，就是可以讓我們將js模組化，並輕鬆匯出到其他模組做使用 
*/ 

console.log('dirname: ', __dirname, 'filename: ', __filename)

class Person {
	constructor(name, age){
		this.name = name
		this.age = age
	}

	greeting(){
		console.log(`My name is ${this.name} and I am ${this.age} years old.`)
	}
}

module.exports = Person

