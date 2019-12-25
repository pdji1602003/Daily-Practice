// # 整理

/*
1. React裡使用變數儲存style(本身是物件)資訊：
```
class MyHeader extends React.Component {
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      margin: "10px",
      fontFamily: "Helvetica"
    };
    return (
      <div>
      <h1 style={mystyle}>Hello Style!</h1>
      <p>Add a little style!</p>
      </div>
    );
  }
}
```
2. 明白console.error的作用以及好處。
3. Printing object
4. DomContentLoaded：等待監聽到此事件再調用函數的原因
5. 使用strict mode的好處？
6. 如何在npm中創建script 
7. 若JS的規範更改，HTML如何知道做出相應更新？舉例而言，ES6新增可將function模組化的功能，HTML工作團隊如何知道以及決定在script標籤裡新增`type="module"`這個屬性？因為HTML跟JS皆是屬於某個網際organization嗎？
8. 若在專案中引用(import)Library，須去查看該Library列於Documenta的Api Reference。
9. 誰決定function is asynchronous？
10. React：將從外部引入的data儲存在state裡(If we don't save the data in a variable, the data will just go away.)
11. 注意react的function有可能是asynchronous，意思是可能表現如下：
```
Object.assign(
  previousState,
  {quantity: state.quantity + 1},
  {quantity: state.quantity + 1},
  ...
)
```
12. 高階函數也有callback function
13. State是用來儲存本地資料component初始化資料
14. 每次渲染，React只會調用相關的function，不會去rerender其他不相關的component。
15. Promise是用來解決callback hell
16. 理解為何一個已經git-managed folder，在拖曳到GitHub資料夾後會失敗
17. 學習怎麼寫npm script
18. 當我們在寫asynchronous function時，最好把變數聲明在function裡，而不要去依賴全局變數，因為我們無法確保在調用async function時，我們所依賴的變數，其值是否已經改變
19. React的威力在於，只要app的state一經更改，react會為你重新渲染畫面
20. What is callback
21. What is Promise
22. What is pseudo class and pseudo element
23. What is JSON
24. 理解為何`const element = <h1>Hello, world!</h1>;`會等於function component以及兩者差異。
25. 我可以在jsx裡的{}使用js 表達式，並將之作為props傳遞給其他react element
26. 理解...(spread operator)的使用情境：用於合併
27. 理解為何react element上需要使用key:幫助react正確渲染
28. 為何function declaration叫做function declartion：我們使用關鍵字function去宣告一個函式，所以他跟function expression有所不同，他會被hoist to the top of the document 
29. What is React.Fragment     
30. What is CSS at-rule
31. What is media query  
32. npx會做什麼事情：npx 想要解决的主要问题，就是调用项目内部安装的module。
33. React.createContext()在何時會接受一個預設參數？
34. 什麼是useEffect以及他的使用情境
35. What is closure
36. 如何update package.json
37. 為何我們需要將constant 變數大寫？
38. —save-dev意思
39. What is side effect? 
40. 當我們想要進行一些操作，那這些操作是會更改外部環境的時候，我們就要使用useEffect
41. What is grid
42. npx install後面接package名稱是代表局部安裝
43. 什麼是OOP?
44. Strategy：Documentation 哪一個數據形態 後面再接下使用方法 
45. 使用方括號去引用變數
46. 什麼是pure function
47. 為何控件需要有name屬性
48. 為何使用npx 找不到指令
49. Alias是代表別名的意思：比方說 for (let i of array)，i就是alias
50. 資訊一做任何更改，他就不是相同的資訊，需要創建一個新的變數去儲存。舉例來說，一個recipe經使用者選擇，跟沒有選擇，是不一樣的狀態。
51. JS不太聰明：如果你要使用賦值符號"="去進行資訊傳遞的行為，在原始型別的情況下，JS會幫你在記憶體裡創建了一個新的空間，
但若是提供給他複雜的物件型態(內含多筆資訊)，他就會告訴你：誒誒，我只能提供address給你哦(pass by reference)。
*/
