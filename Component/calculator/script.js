// 所有會更動的值都以這變數內的為基準
const calculator = {
	displayValue: '0',
	firstOperand: null,
	waitingForSecondOperand: false,
	operator: null
}

//Add event
const keys = document.querySelector('.calc-numbers');
keys.addEventListener('click', event => {
	const { target } = event;
	//檢查按到的是否是button
	if (!target.matches('button')) return;

	//檢查按到的是否是AC btn
	if (target.hasAttribute('data-all-clear')) {
		resetCalculator();
		updateDisplay();
		return;
	}

	//檢查按到的是否是operator btn
	if (target.hasAttribute('data-operator')) {
		operatorHandler(target.value);
		updateDisplay();
		return;
	}

	//檢查按到的是否是decimal btn
	if (target.hasAttribute('data-decimal')) {
		inputDot(target.value);
		updateDisplay();
		return;
	}

	//檢查按到的是否是number btn
	if (target.hasAttribute('data-number')) {
		inputDigit(target.value);
		updateDisplay();
		return;
	}

	//檢查按到的是否是back btn
	if (target.hasAttribute('data-back')) {
		backOneDigit();
		updateDisplay();
		return;
	}

	//檢查按到的是否是CE btn
	if (target.hasAttribute('data-clear-entry')) {
		clearEntry();
		updateDisplay();
		return;
	}

	//檢查按到的是否是sqrt btn
	if (target.hasAttribute('data-sqrt')) {
		squreRoot();
		updateDisplay();
		return;
	}

	//檢查按到的是否是% btn 
	if (target.hasAttribute('data-one-hundred')) {
		divideBy100();
		updateDisplay();
		return;
	}

	//檢查按到的btn是否是正負號轉換btn
	if (target.hasAttribute('data-pos-neg')) {
		switchPositive();
		updateDisplay();
		return;
	}

	//檢查按到的btn是否是求幾分之幾
	if (target.hasAttribute('data-portion')) {
		divideBySelf();
		updateDisplay();
		return;
	}

	//檢查按到的btn是否是pi btn
	if (target.hasAttribute('data-pi')) {
		showPi();
		updateDisplay();
		return;
	}

})

/*
使用者在按下運算鍵時，預期可以對他們上一個輸入以及接下來要輸入的數字進行一些運算操作
所以我們很直覺的會想到，當使用者在按下任一運算鍵時，他們已經按了一個數字(當然也有可能沒先按，則留待後續討論)
*/
function operatorHandler(nextOperator) {
	const { displayValue, firstOperand, operator } = calculator;
	const inputValue = parseFloat(displayValue);

	if (firstOperand == null) {
		calculator.firstOperand = inputValue;

	} else if (operator) {
		const result = performCalculation[operator](firstOperand, inputValue);
		calculator.displayValue = String(result);
		calculator.firstOperand = result;
	}
	calculator.waitingForSecondOperand = true;
	calculator.operator = nextOperator;
	console.log(calculator);
}

const performCalculation = {
	'+': (firstOperand, secondOperand) => firstOperand + secondOperand,
	'-': (firstOperand, secondOperand) => firstOperand - secondOperand,
	'x': (firstOperand, secondOperand) => firstOperand * secondOperand,
	'/': (firstOperand, secondOperand) => firstOperand / secondOperand,
	'=': (firstOperand, secondOperand) => secondOperand
}

//不管使用者按下什麼數字鍵，都以這個數字鍵去取代變數calculator裡的displayValue
function inputDigit(digit) {
	const { displayValue } = calculator;

	if (calculator.waitingForSecondOperand === true) {
		calculator.displayValue = digit;
		calculator.waitingForSecondOperand = false;
	} else {
		calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
	}
	console.log(calculator);
}

//當使用者按下小數點時，若displayValue已經有小數點就do nothing，若沒有就添加小數點上去
function inputDot(dot) {
	const { displayValue } = calculator;
	if (calculator.waitingForSecondOperand) return;
	if (displayValue.includes(dot) != true) {
		calculator.displayValue += dot;
	} else {
		return;
	}
	console.log(calculator);
}

function resetCalculator() {
	calculator.displayValue = '0';
	calculator.firstOperand = null;
	calculator.waitingForSecondOperand = false;
	calculator.operator = null;
}

//按下這個按鈕時，代表使用者想刪除想自現有數值刪除一個數字
function backOneDigit() {
	const { displayValue } = calculator;
	if (displayValue.length >= 2) {
		calculator.displayValue = displayValue.slice(0, -1);
	} else {
		calculator.displayValue = '0';
	}
	console.log(calculator);
}

//當使用者按下這個按鈕時，代表他們想刪除當前輸入的數值
function clearEntry() {
	calculator.displayValue = '0';
	calculator.waitingForSecondOperand = true;
	console.log(calculator);
}

//當使用者按下這個按鈕時，會立即顯現這個數值的平方根
function squreRoot() {
	const { displayValue } = calculator;
	calculator.displayValue = parseFloat(displayValue);
	calculator.displayValue = Math.sqrt(calculator.displayValue);
	calculator.displayValue = String(calculator.displayValue);
	calculator.waitingForSecondOperand = true;
}

//當使用者按下這個按鈕時，當前數值會立即除以100
function divideBy100() {
	const { displayValue } = calculator;
	calculator.displayValue = parseFloat(displayValue / 100);
	calculator.displayValue = String(calculator.displayValue);
	calculator.waitingForSecondOperand = true;
}

function switchPositive() {
	const { displayValue } = calculator;
	if (displayValue === '0') return;
	calculator.displayValue = (displayValue === -displayValue) ? displayValue : displayValue * -1;
	console.log(calculator);
}

//使用流程是：使用者先按下一數字鍵，再按1/x鍵
function divideBySelf() {
	const { displayValue } = calculator;
	calculator.displayValue = 1 / displayValue;
	calculator.waitingForSecondOperand = true;
}


function showPi() {
	//已知有Math.PI這屬性，我要如何決定已這屬性所創建的數值的digit長度
	calculator.displayValue = '3.14159';
	calculator.waitingForSecondOperand = true;
}

//不管變數calculator裡的display值是多少，都顯是在計算機面板上
function updateDisplay() {
	const display = document.querySelector('.calc-screen');
	display.innerText = calculator.displayValue;
}

updateDisplay();