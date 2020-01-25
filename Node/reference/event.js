const EventEmitter = require('events')

// create class
class MyEmitter extends EventEmitter{}

// 初始化
const myEmitter = new MyEmitter()
//myEmitter監聽事件'event'，使用callback指名事件觸發時要進行什麼事情
myEmitter.on('event', () => {
	console.log('事件觸發成功')
})

//觸發事件
myEmitter.emit('event')