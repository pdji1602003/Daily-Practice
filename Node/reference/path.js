const path = require('path')

//Base file name 只獲取當前檔案名稱
console.log(path.basename(__filename))

// directory name 獲取檔案存在的directory名稱
console.log(__dirname)
console.log(path.dirname(__filename))

// File extension
console.log(path.extname(__filename))

// Create path object 將filename資訊以物件方式呈現
console.log(path.parse(__filename))

// concatenate path 所有的路徑都必須是字串
console.log(path.join(__dirname, 'test', 'hello.html'))
