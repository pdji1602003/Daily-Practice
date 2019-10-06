/*
先分析這個todo包含什麼功能，以及思考一下我如何可以達成這些功能
1.左側有個輸入框，輸入文字後按下enter鍵可以將文字push列表上，成為todo事項之一。
2.目前列表上有三個代辦事項作為示範內容，分別是youtube, work, grocery
3.當前選到的待辦事項字體變粗，並且右側會出現待辦事項的相關細項。
    問題一：在沒有選中任何待辦事項的情況下，右側的div預設應該是消失的(display:none)
4.仔細觀察一下右側的待辦div，他的title等於左側的待辦事項。
5.待辦div title列上有個數字顯示剩餘的待辦細項數目。
6.當我check待辦細項後，數目應該會相應減少。
7.若我透過下方的input輸入task，則可以新增待辦細項，右上方的待辦細項數目會相應增加。
8.按下clear completed task會清除所有已經完成的task
9.按下delete list會刪除整個task container
*/

//抓取ul元素
const listsContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');
const deleteListButton = document.querySelector('[data-delete-list-button]');

//localStorage:1.創建鑰匙 2. 儲存資料 3.提領資料
const LOCAL_STORAGE_LIST_KEY = 'task.lists';
//跟瀏覽器説，嘿，我現在要使用以下這把key向你索取資料，若這把key沒有對應的銀行戶頭，那就幫我創一個吧！
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY))||[];

const LOCAL_STORAGE_LIST_SELECTED_KEY = 'task.selectedListId';
let selectedListId = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_SELECTED_KEY));

//要先想的是，我的todo要儲存在什麼樣的資料型態
// let lists = [
//   {
//     id: 1,
//     name: 'todo'
//   },
//   {
//     id:2, 
//     name:'name'
//   }
// ];


listsContainer.addEventListener('click', e=> {
  //<li class="list-name" data-list-id="1570244651375">hello</li>
  if(e.target.classList.contains('list-name') === true){
    // e.target.classList.add('active-list');
    selectedListId = e.target.dataset.listId;
    saveAndRender();
  }
})

newListForm.addEventListener('submit', e => {
  e.preventDefault();
  const listName = newListInput.value;
  if( listName === '' || listName == null) return;
  //我透過input裡產生出的資訊，確切而言是什麼？需透過什麼樣的數據型態所儲存？
  //前面已經提過了，每個透過input產生的資訊起碼需要有個id，這樣我們才會知道說，我們選中的是哪的list，可以理解成一份資訊的一個身分證，如此我們之後在處理這些資訊時才不會把他們搞混
  //我們現在拿到的listName只是個string而已，必須透過其他方式把它轉成更加可用的方式，在這邊我們選擇的是function
  //其實我現在正在學習的是，如何處理虛擬的資訊。
  //的確，我們從使用者那獲得了一些資訊，可是這些raw data不完全是我們恰好需要的。
  //我的意思是，尚未處理過的還不能使用，我們得從想辦法將資訊分門別類、轉化、吸收、拆解等等，將之變成我們需要的。
  const list = createList(listName);//產生了一個obj
  lists.push(list);
  newListInput.value = null;
  //當我們submit資料後，一邊是是資訊的處理(localStorage)，一邊是可見元素的生成(頁面渲染)
  saveAndRender();
})

// remove list
deleteListButton.addEventListener('click', e => {
  lists = lists.filter( list => list.id != selectedListId)
  selectedListId = null
  saveAndRender();
})


//產生儲存我們data的obj
function createList(name){
  return {id:Date.now().toString(), name:name, task:[]};
}

function createTask(name){
  return {id:Date.now().toString(), name:name, complete:false};
}


function saveAndRender(){
  save();
  render();
}
//將資訊儲存到client端
function save(){
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY,JSON.stringify(lists));
  localStorage.setItem(LOCAL_STORAGE_LIST_SELECTED_KEY,selectedListId)
}


//在頁面上渲染出html元素
/*會需要先寫render是因為我們希望網頁在一load下來即可展現我們儲存在client端的資料*/
function render() {
  /*如果不先clear listscontainer裡的元素會怎樣？
  我猜想，這個clearElement()其實就是為了清除html預先寫好的範例code。
  這樣畫面上就只會有user真正添加的todo，而不會有html上的範例code，這種做法可以讓js programmer
  不用去手動刪除html裡的範例code，也可以確保畫面上渲染的元素是後來才添加上的。
  */
  clearElement(listsContainer);
  // <li class="list-name active-list">Youtube</li>
  lists.forEach(list => {
    const listElement = document.createElement('li');
    listElement.classList.add('list-name');
    //以下這個透過dataset添加id的做法，我原先沒有想到
    listElement.dataset.listId = list.id;
    listElement.innerText = list.name; //在這裡的list本身已經是string
    if(list.id === selectedListId){
      listElement.classList.add('active-list');
    }
    listsContainer.appendChild(listElement);
  })



}
function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }

}

render();



