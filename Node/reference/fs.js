const fs = require('fs')
const path = require('path')

// create a folder in the current directory
// fs.mkdir(path.join(__dirname, '/test'), {}, (err)=>{
// 	if(err) throw err
// 	console.log('folder created')
// })

// create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello world', (err)=>{
// 	if(err) throw err
// 	console.log('text written to')
// })


fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello world', (err) => {
	if(err) throw err
	console.log('text written to')
	fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love node.js', (err) => {
		if(err) throw err
		console.log('text appended to')
	})
})