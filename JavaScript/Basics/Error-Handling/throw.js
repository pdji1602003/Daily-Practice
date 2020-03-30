function getRectArea(width, height) {
	if(isNaN(width) || isNaN(height)){
		//如果任一參數不是數字，則運行以下的code
		//而這code是什麼呢？是拋出以下錯誤訊息。
		console.log('this is an error!');
		throw "Parameter is not a number!";
	}
}

/*
	想像你寫了一個function，但你不確定寫的邏輯、各個層面是否正確
	於是你想要對你寫的function進行測試，這時候就可以使用try...catch..來進行測試
	try隔出了一個測試空間，讓你可以針對function進行測試
	若在try任測試的functionu有任何差錯，
	則catch就會印出出了差錯的地方。
	結論就是說，若catch有印出出了差錯的地方，
	就代表你原先寫的function有錯誤。
*/
try {
	getRectArea(3, 'a');
	console.log('會印出我嗎？');
}

/*
當getRectArea()的參數不是數字時，不會印出21行的console.log
但當getRectArea()的參數都是數字時，可以成功印出21行的console.log
這說明了在try{}裡進行測試的function，若一碰到錯誤，
會立即將控制權交出給catch，變成是catch裡的code需要被運行。
*/
catch(e){
	console.log(e);
}

console.log('那我呢？');//這行無論如何都會印出