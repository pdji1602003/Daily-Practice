/*
	1.在使用者尚未輸入任何數字的情況下，面板顯示0
	2.使用者若按下的是數字按鈕，則數值會反映在面板上
	3.按下任何操作符號後在面板上不會對上一個數字做出任何改變，但直覺是我們需要一個變數去紀錄使用者選擇了哪一個操作符號。
	4.我們需要另一個容器去紀錄使用者目前按下的是第一個數字，還是第二個，若是第二個，代表我們需要完成運算。(在js，任何狀態的改變也需要一個容器去儲存，比如說在todo list裡的task完成狀態)
*/

//Store all the data we need for this app
const calculator = {
	displayValue: '0', //儲存使用者輸入的值或是運算後的結果，值會被顯示在螢幕上
	firstOperand: null, //儲存使用者輸入的第一個操作數
	waitingForSecondOperand: false,//檢查當前狀態，確認是否需要第二個操作數或是已經可以進行運算
	operator: null//運算符號
};

// Find out which key does the user press
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', event => {
	const { target } = event; // 將event.target自event抽取出來成為變數
	if (!target.matches('button')) return;

	if (target.classList.contains('operator')) {
		handleOperator(target.value);
		updateDisplay();
		return;
	}

	if (target.classList.contains('decimal')) {
		inputDecimal(target.value);
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


function inputDecimal(dot) {
	//若我們已經按下其中之一個運算符號時，則function中斷==>代表我們在這種情況下不能再數字後方繼續添加小數點
	if(calculator.waitingForSecondOperand === true) return;
	//當前值不包含'.'按下dot時需要將dot加在當前值上再回傳，換句話表示，當前值若已有dot，則按下dot不會有任何反應
	if (!calculator.displayValue.includes(dot)) {
		calculator.displayValue += dot;
	}
}

function handleOperator(nextOperator) {
	const { firstOperand, displayValue, operator } = calculator;
	const inputValue = parseFloat(displayValue);
	//若operator已經存在且waitingForSecondOperand為真值，代表使用者已經點按一次運算符號，目前正打算按下第二次運算符號，若是如此，我們以第二次輸入的運算符號代替第一次輸入的，並即刻跳出這個function
	if(operator && calculator.waitingForSecondOperand){
		calculator.operator = nextOperator;
		console.log(calculator);
		return;
	}

	if (firstOperand == null) {
		calculator.firstOperand = inputValue;
	} else if (operator){ //檢查operator是否已經存在，若是運行以下code
		const currentValue = firstOperand || 0;
		//將arrow function儲存在物件裡，因為key是個string，所以須以[]取用，取用後即可以()調用箭頭函數。
		const result = performCalculation[operator](firstOperand, inputValue);
		
		calculator.displayValue = String(result);
		calculator.firstOperand = result;
	}

	calculator.waitingForSecondOperand = true;
	calculator.operator = nextOperator;
	console.log(calculator);
}

//這個方法太酷了，過往我都是看到他人以switch處理這塊！
const performCalculation = {
	'/':(firstOperand, secondOperand) => firstOperand / secondOperand,
	'*':(firstOperand, secondOperand) => firstOperand * secondOperand,
	'+':(firstOperand, secondOperand) => firstOperand + secondOperand,
	'-':(firstOperand, secondOperand) => firstOperand - secondOperand,
	'=':(firstOperand, secondOperand) => secondOperand
}

function resetCalculator(){
	calculator.displayValue = '0';
	calculator.firstOperand = null;
	calculator.waitingForSecondOperand = false;
	calculator.operator = null;
	console.log(calculator);
}


function inputDigit(digit) {
	const { displayValue, waitingForSecondOperand } = calculator;
	//若displayValue的值是0，就以digit覆寫過去，若不是就將digit增加在displayValue後面
	if (waitingForSecondOperand === true) {
		calculator.displayValue = digit;
		calculator.waitingForSecondOperand = false;
	} else {
		calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
	}
	console.log(calculator);
}

//將calculator物件裡displayValue的值展現在面板上
function updateDisplay() {
	const display = document.querySelector('.calculator-screen');
	display.value = calculator.displayValue;
	console.log(calculator);
}

updateDisplay();
