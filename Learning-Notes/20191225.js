/*
當在js file裡看到賦值符號時，自動在腦海轉譯為文字"設為"。
舉例來說 let number = 10，意思就是「以let 宣告一個變數number，並將其值設為10」

Recommended React practices：
1. Consistent naming scheme
2. When to use context, props
3. Immutability in React(為何以const宣告變數)states and props can’t be mutated


學習如何在vscode裡更改我們的preference setting
使用map去render list elements(important to have keys)
理解@font-face的使用情境以及意思
下載eslint-react-hooks檢查錯誤
What is cache?
What is service worker?https://dev.to/lydiahallie/javascript-visualized-the-javascript-engine-4cdf

如何新增一個component
知道如何創建一個動態id：使用npm uuid的方法 或是 Date.now().toString()

我認為不用作筆記的原因：
學習的核心是要去理解(至少妳可以以中文解釋清楚為何這麼做的原因以及語法)
並記得關鍵字就好，有時候不懂可以去看原始文件/官方文檔

////////////////////////////////////////////
在React裡，Event handler function prefix by handle(呼應上頭的naming scheme)
舉例來說，onClick={(e)=> handleClick(e)}
function handleClick(e){
	////
	do something here
}
這樣在檢視我們的code時，可以清楚看出這個function在幹嘛的
////////////////////////////////////////////

如何讓child component之間的資訊相互連動(share state between components)
如果兩個sibling components之間share state，則我們應該要將lift up state到其parent component
State lifting
react間的unidirectional data flow單向數據流

如何利用展開語法拷貝一份物件/array
What is css in js?
What is TypeScript
React job interview:https://www.youtube.com/watch?v=nRI0dn6GTj8

libs stands for library
What is global state?我覺得存取在最頂層components的state，可以透過context將其state傳送到任意child component裡
理解function給定參數是id closure
什麼是props.children(React Professional Course)
什麼是SPA網頁(Single Page App)
什麼是react router?(React Professional Course)


React透過renference去render
Function在JavaScript裡是First-class citizen，這句話的意思？
=>Function並不是一個幫助我們達成工作的手段，而是像其他數據類型一樣，因此我們可以對其他數據類型做的事情，
也一樣可以對function做。舉例來說，function can be returned from a function, 
being passed as an argument and assigned to a variable
因為function can be returned from a function，這解釋了JS可以有closure這東西存在
衍生提一下closure，中文翻譯為閉包
但我認真覺得：光看閉包這名詞怎麼可能理解其代表意思！！！
For the sake of brevity，我覺得可以把closure理解成JS語言的一種表現特性
在這邊我想要引用一下 Dan Abramov 在 [What Is JavaScript Made Of?](https://overreacted.io/what-is-javascript-made-of/)
裡所出的解釋：
Normally, when you exit a function, 
all its variables “disappear”. 
This is because nothing needs them anymore. 
But what if you declare a function inside a function? 
Then the inner function could still be called later, 
and read the variables of the outer function. 
In practice, this is very useful! But for this to work, 
the outer function’s variables need to “stick around” somewhere. 
So in this case, JavaScript takes care of “keeping the variables alive” i
nstead of “forgetting” them as it would usually do. 
This is called a “closure”. 




也因為記得我們的初始值

Spread operator可以進行哪些事情？複製 合併 展開
Host 託管者
Local development environment = local host
Require 跟 import 的差異
npm build
deploy的意思
什麼是robots.txt
manifest.json
Html entities
什麼是aria-label
什麼是aria-hidden
Why do we need to clear setTimeout


Fr 相當於flex-grow

輸入input 內容
按下enter submit
submit之後 input文字消失
taskItem基於取得內容渲染出來
如何使用devTool確認監聽的事件有無發生
When React starts up, it starts listening for all events at the top level using a single event listener.的意思
What is controlled form form is controlled by state
State should be single source of truth
Controlled form 跟一般form有何不同
為何我們需要在控件上加上name屬性
為何button type=“submit”用作submit button很重要
理解為何若沒有從localStorage提取存取的資料，畫面上的資料還是會不見：
因為react都渲染時提取資料得依據還是根據你的local state
react所有component的state都存在state裡



React 不能mutate

Helper function真的很重要

找到所有tasks 並將其display設為’’

點擊all時，所有的task item要顯現
點擊active時，所有checked= false的item要顯現
點擊completed時，所有checked= true的item要顯現
什麼是function scope vs block scope
Not defined代表這個變數根本就還沒被創建
Undefined指的是已經有這個變數了，只是它還沒被賦值
什麼是flag



Derived state
JavaScript是個高階語言，當我們在決定數據類型時，實際上就是在分配記憶體容量
為何我們不可以直接mutate state in react
Save as sketch的副本一樣

當我們創建一個新的變數，並將這個變數的值設為等同某已存在的變數(其值為array)時，我們實際上在做的事情是，我們創建了一個新指向(reference)，而不是拷貝了既有的變數的值

當我們更新新變數的值時，因為此變數與既有變數指向同一個記憶體位置，我們會不小心更動了既有變數的值。



Outline vs border
如何檢查值在copy還是reference? console.log(prevState === this.state)

Now, mutating currentStateCopy won't mutate the original state. Do operations over currentStateCopy and set it as the new state using setState()
 It queues a state transition based on what it thinks is going on which may not include the direct changes to this.state.

將-1轉譯為不存在
…args
What is Geolocation API?
*/