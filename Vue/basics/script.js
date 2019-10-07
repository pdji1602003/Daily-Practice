/*
	*****為何需要使用框架？*****
	相較於原生JS的做法，每產個內容，
	都需要抓取一次dom元素，
	document.getElementById('test').innerText = 'Hello World Using Vanilla JS'
	使用框架(比如vue)就可以少寫很多code)
	以vue的例子而言，vue事先幫你建構好具有相同屬性的物件
	所以若要在同一個element裡產出一樣內容，
	我只不要斷的複製貼上{{message即可}}
*/
////////////////////////////////////////////////////////
/*
1. #app的child element也可以引用data數據
2. angular, vue, react都是用數據驅動內容
*/

////////////////////////////////////////////////////////
/*
創建一個vue物件
1. 如何使用vue綁定元素
2. 如何使用vue綁定資料
*/

let app = new Vue({
	el: '#app',//元素綁定，這邊相當於選取使用原生js抓取dom元素
	data: {//資料綁定
		message: 'Hello World',
		score: 60
	}
});

app.message = 'Strange'// app的屬性不僅是可讀性，而是可以修改的

////////////////////////////////////////////////////////
//Vue語法

let syntax = new Vue({
	el: '#syntax',
	data: {
		message: 'Hello, there',
		loading: false
	}
});

////////////////////////////////////////////////////////
//vue: v-if
let result = new Vue({
	el: '#result',
	data: {
		score: 80
	}
})

////////////////////////////////////////////////////////
//vue: v-model:可以讓你動態即時更新資料，搭配控件元素使用，比方說<input>, <textarea>
let model = new Vue({
	el: '#model',
	data: {
		message: '100'
	}
})


////////////////////////////////////////////////////////
//傳統迴圈

function colorList() {
	let colors = ['red', 'green', 'blue'];
	let traList = document.querySelector('.tra-list');
	//將colors裡的值一一抓取，塞進ul元素裡行成list item
	for (let color of colors) { //抓取array的值
		const listItem = document.createElement('li');
		listItem.innerText = color;
		traList.appendChild(listItem);
	}
}

colorList();

////////////////////////////////////////////////////////
//v-for語法

let list01 = new Vue({
	el: '#list01',
	data: {
		lists: [
			{ fruit: 'Apple' },
			{ fruit: 'Grape' },
			{ fruit: 'Orange' }
		]
	}
})

let list02 = new Vue({
	el: '#list02',
	data: {
		parentMessage: 'Want some fruit',
		lists: [
			{ fruit: 'Apple' },
			{ fruit: 'Grape' },
			{ fruit: 'Orange' }
		]
	}
})

////////////////////////////////////////////////////////
//v-on 事件

let event = new Vue({
	el: '#event',
	data: {
		counter: 0 //初始值
	}
})

let event2 = new Vue({
	el: '#event2',
	data: {
		name: 'Lin'
	},
	methods: {
		greet: function (e) {
			//this在方法裡指向當前的vue 實例(instance)，也就是event2
			//我在猜想，是否可以理解成調用function的那個調用者？
			alert(`Hello, ${this.name}! How are you?`);
			if (e) {
				alert(e.target.tagName.toLowerCase());
			}
		}
	}
})

let event3 = new Vue({
	el: '#event3',
	data: {
		message: 'Hello'
	},
	methods: {
		say: function (msg) {//傳入什麼參數，就alert什麼參數
			alert(msg)
		}
	}
})

let event4 = new Vue({
	el: '#event4',
	methods: {
		warn: function (msg, event) {
			event.preventDefault();
			console.log(msg);
			console.log(event.target);
		}
	}
})
