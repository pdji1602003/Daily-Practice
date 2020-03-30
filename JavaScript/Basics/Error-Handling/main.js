const person = {
	name:'Linyin', 
	age:20
}

function drinkAlcohol(p){
	if(p.age < 21){
		throw new Error('Person is under the age of 21')
	}
	console.log(`${p.name} is drinking!`);
}

try {
	drinkAlcohol(person)
} catch (err){
	console.error(err.message) //message就等同於我們傳入new Error()裡的參數
}


//如果我們以throw設置一個新的error物件，可是沒有捕獲，那會發生什麼事？
//瀏覽器一樣會顯現Uncaught error

//使用throw設置一個新的error跟錯誤處理是分開的兩個觀念
