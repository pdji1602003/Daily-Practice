//使用import引入時需注意一定要明確標示路徑，可使用./相對路徑，或是/絕對路徑
import User from './user.js'
// 非default引入的function需包含在花括號裡。
// 可以任意更改引入function的名稱如下：
import {printName as printUserName, printAge} from './user.js'
import {add} from './export.js'


console.log(add(1, 2));

const jack = new User('Jack', 20)
printUserName(jack)
printAge(jack)
