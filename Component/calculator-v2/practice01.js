// https://freshman.tech/calculator/
/*
	1.在使用者尚未輸入任何數字的情況下，面板顯示0
	2.使用者若按下的是數字按鈕，則數值會反映在面板上
	3.按下任何操作符號後在面板上不會對上一個數字做出任何改變，但直覺是我們需要一個變數去紀錄使用者選擇了哪一個操作符號。
	4.我們需要另一個容器去紀錄使用者目前按下的是第一個數字，還是第二個，若是第二個，代表我們需要完成運算。(在js，任何狀態的改變也需要一個容器去儲存，比如說在todo list裡的task完成狀態)
*/

const calculator = {
	displayValue: '0',
	firstOperand: null,
	waitingForSecondOperand: false,
	operator: null
}
/* Event Listener */
//Step 2:想像使用者取得這app後會做的第一件事情
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', event => {
	const { target } = event;
	if (!target.matches('button')) return;

	if (target.classList.contains('operator')) {
		handleOperator(target.value);
		updateDisplay();
		return;
	}

	if (target.classList.contains('decimal')) {
		inputDot(target.value);
		updateDisplay();
		return;
	}

	if (target.classList.contains('all-clear')) {
		resetCalculator();
		updateDisplay();
		return;
	}

	inputDigit(target.value);
	updateDisplay();
})

/* 
按下任一運算符號會觸發這個功能，所以我們希望這個功能做什麼事情呢？
1.儲存使用者輸入的第一個數值
2.儲存使用者選擇的運算符號
*/
function handleOperator(nextOperator) {
	const { firstOperand, displayValue, operator } = calculator;
	const inputValue = parseFloat(displayValue);//parseFloat確保了數值是以數字型態儲存，而非字串

	//檢查operator是否已經存在
	if(operator && calculator.waitingForSecondOperand){
		//若是，代表使用者重複點按，以新的operator覆寫掉既有的operator
		calculator.operator = nextOperator;
		console.log(calculator);
		//以return跳出這個function，因為這個情況會發生就代表使用者還沒有輸入第二個數值
		return;
	}

	//若firstOperand為空值，我們將使用者的inputvalue儲存到firstOperand裡，成為我們待被運算的第一個數值
	if (firstOperand == null) {
		calculator.firstOperand = inputValue;
	} else if(operator){//當if不成立，代表我們已經有可以運算的材料了，接下來我們可以在else if裡進行運算
		const result = performCalculation[operator](firstOperand, inputValue);
		calculator.displayValue = String(result);//又將result轉成字串儲存
		calculator.firstOperand = result;//這邊維持數字型態，因為firstOperand本來就是數字型態
	}

	//代表說，我們輸入的數值可以ready for calculation了
	calculator.waitingForSecondOperand = true;
	//將nextOperator的值賦給operator
	calculator.operator = nextOperator;
	console.log(calculator);
}

const performCalculation = {
	'+':(firstOperand, secondOperand) => firstOperand + secondOperand, 
	'-':(firstOperand, secondOperand) => firstOperand - secondOperand, 
	'*':(firstOperand, secondOperand) => firstOperand * secondOperand, 
	'/':(firstOperand, secondOperand) => firstOperand / secondOperand, 
	'=':(firstOperand, secondOperand) => secondOperand
};


function inputDigit(digit) {
	const { displayValue, waitingForSecondOperand } = calculator;
	if (waitingForSecondOperand === true) {
		calculator.displayValue = digit;
		//需要將waitingForSecondOperand改成false，否則數字永遠只能是當前輸入值，不能append to it
		calculator.waitingForSecondOperand = false;
	} else {
		calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
	}
	console.log(calculator);
}

function inputDot(dot) {
	const { displayValue } = calculator;
	if(calculator.waitingForSecondOperand) return;
	if (!displayValue.includes(dot)) {
		calculator.displayValue += dot;
	} else {
		return;
	}
}

function resetCalculator(){
	calculator.firstOperand = null;
	calculator.displayValue = '0';
	calculator.waitingForSecondOperand = false;
	calculator.operator = null;
}

/* Function */
//Step 1:使用者尚未操作時，app的初始狀態
function updateDisplay() {
	const display = document.querySelector('.calculator-screen');
	display.value = calculator.displayValue;
}

updateDisplay();


