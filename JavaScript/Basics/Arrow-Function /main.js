class Person {
	constructor(name) {
		this.name = name
	}

	printNameArrow() {
		setTimeout(() => {
			console.log(this)
		}, 200)
	}

	printNameFunction() {
		setTimeout(function () {
			console.log(this)
		}, 200)
	}
}

const person = new Person('Linyin')
console.log(person)//Person {name:'Linyin'}
person.printNameArrow() // Person {name:'Linyin'}
person.printNameFunction() // Window object