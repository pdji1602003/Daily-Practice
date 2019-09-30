
// 跳出循環：break的使用方式
/*
  1.使用function包覆code->good habit
  2.當value為falsy值，break the loop
*/
function getSum() {
  let sum = 0;
  while (true) {
    let value = +prompt("Enter a number", '');
    //當value為falsy值，break the loop
    if (!value) break; // (*)
    sum += value;
  }
}

//繼續下一次迭代：continue的使用方式

for (let i = 0; i < 10; i++) {
  //如果為真，跳过當前循環部分。
  if (i % 2 == 0) continue;
  alert(i); // 1，然后 3，5，7，9
}

//雙層循環 & label
function doubleLoop() {
  outer://outer就是我們的label
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      //可以想一下，在不跳出循環的情況下，prompt會出現幾次？
      //答案是9次。因為 第二層循環(0, 1, 2) * 第一層循環(0, 1, 2) = 3*3 = 9次
      let input = prompt(`Value at coords (${i},${j})`, '');
      // 如果是空字符串或已取消，則跳出循環至outer處。(在不使用label指定跳到哪裡，break預設只會跳出單層loop)
      if (!input) break outer; // (*)
      // 用得到的值做些事……
    }
  }
  alert('Done!');
}




//for...of的使用方式
//我的理解是，基本是只要有length，有index的都可以使用這種方式迭代，這解釋了為何string也可以使用這方式
function* foo() {
  yield 1;
  yield 2;
}

for (let o of foo()) {
  console.log(o);
  // expected output: 1
  continue; // closes iterator, triggers return
}

let iterable = "boo";
for (let value of iterable) {
  console.log(value); //"b", "o", "o" 
}

// for...of & for...in的差異
let iterable1 = [3, 5, 7];
iterable1.foo = 'hello';
console.log(iterable1);// [3, 5, 7, { foo:'hello'}]
for (let i in iterable1) {
  console.log('屬性', i);// 0, 1, 2, foo 這結果相當於他把iterable1 視為 [ {0:3}, {1:5}, {2:7}, {foo:'hello'}]
  console.log('值', iterable1[i]);// 3, 5, 7, hello
}
//我的理解是，for...in循環會枚舉"屬性"，所以並不適合用在array，而是適合用在物件上。
console.log(iterable1.legnth);//undefined

for (let i of iterable1) {
  console.log(i); //3, 5, 7 
}
//for...of適合用在array上取值
