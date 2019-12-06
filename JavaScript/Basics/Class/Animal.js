export class Animal {
	constructor(type, legs){
		this.type = type;
		this.legs = legs;
	}

	makeNoise( sound = 'Loud Noise') {
		console.log(sound);
	}
	// static置放在function前，可允許我們在尚未instantiate animal物件的情況下，調用這個class所具有的method
	static returnNumber(number){
		console.log(number);
	}
}

//class Cat會繼承來自Animal的method與特性
export class Cat extends Animal {
	constructor(type, legs, tail){
		super(type, legs);
		this.tail = tail;
	}

	makeNoise( sound = 'meow'){
		console.log(sound);
	}
}