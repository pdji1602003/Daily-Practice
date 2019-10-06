/*這個app需要被pass的data是什麼？*/
const listsContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');
const deleteListButton = document.querySelector('[data-delete-list-button]');

const listDisplayContainer = document.querySelector('[data-list-display-container]');
const listTitleElement = document.querySelector('[data-list-title]');
const listCountElement = document.querySelector('[data-list-count]');

const newTaskForm = document.querySelector('[data-new-task-form]');
const newTaskInput = document.querySelector('[data-new-task-input]');

const tasksContainer = document.querySelector('[data-tasks]');
const taskTemplate = document.getElementById('task-template');


//localStorage:將我lists的資料儲存在client端 
/*
  1.將針對需要儲存的資料創建鑰匙(類似到銀行開戶的概念)
  2.儲存
  3.提領
*/
const LOCAL_STORAGE_LIST_KEY = 'task.lists';//key必須是個string
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
//必須讓瀏覽器記得哪一個是目前active的
const LOCAL_STORAGE_LIST_SELECTED_ID_KEY = 'task.selectedId';
let selectedId = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_SELECTED_ID_KEY));

//sample data info(value)
// let lists = [
//   {
//     id: 1,
//     name: 'todo',
//     task: []
//   },
//   {
//     id: 2,
//     name: 'name',
//     task: [
//       {
//         id: 01,
//         name: 'task name',
//         complete: false
//       },
//       {
//         id: 02,
//         name: 'task name',
//         complete: true
//       }
//     ]
//   }
// ];
//按下deletebutton後，會刪除當前選中的list
// deleteListButton.addEventListener('click', e=> {
//   //以下這個方法比較不好的地方在於，妳處理完html element後，還要去處理你的data，
//   //那你倒不如直接處理data比較快，畢竟你的render function是基於你的data的
//   const activeListElement = document.querySelector('.active-list');
//   let activeListPos = lists.findIndex( list => list.id === activeListElement.dataset.listId )//返回index值
//   lists.splice(activeListPos, 1);
//   console.log(lists);
//   selectedId = null;
//   activeListElement.remove();
//   saveAndRender();
// })

tasksContainer.addEventListener('click', e => {
  if(e.target.tagName.toLowerCase() === 'input') {
    //抓取當前選取LIST
    const selectedList = lists.find( list => list.id === selectedId );
    //抓取當前的TASK
    const selectedTask = selectedList.tasks.find( task => task.id === e.target.id);
    selectedTask.complete = e.target.checked;
    save();
    renderTaskCount();
  }
})

newTaskForm.addEventListener('submit', e => {
  e.preventDefault();
  const taskName = newTaskInput.value;
  if (taskName === "" || taskName == null) return;
  const task = createTask(taskName);
  // const aa = lists.filter( list => list.id === selectedId);
  // console.log(aa); ->filter返回的是一個新array，而find返回的是符合條件的第一個值
  const selectedList = lists.find(list => list.id === selectedId);
  selectedList.tasks.push(task);
  newTaskInput.value = null;
  saveAndRender();

})
//每次submit時，都會產生一些資料:what data type should it be saved in?
newListForm.addEventListener('submit', e => {
  e.preventDefault();
  const listName = newListInput.value;
  if (listName === "" || listName == null) return;
  const list = createList(listName);
  lists.push(list);
  newListInput.value = null;
  saveAndRender();
})

deleteListButton.addEventListener('click', e => {
  lists = lists.filter(list => list.id !== selectedId)
  selectedId = null
  saveAndRender()
})

//listElement一經點擊，他身上帶有的id就會儲存在localStorage
listsContainer.addEventListener('click', e => {
  if (e.target.classList.contains('list-name') === true) {
    selectedId = e.target.dataset.listId;
    saveAndRender();
  }
})

function createList(name) {
  return { id: Date.now().toString(), name: name, tasks: [] };
}

function createTask(name) {
  return { id: Date.now().toString(), name: name, complete: false };
}

function saveAndRender() {
  save();
  render();
}

//創建function之後要呼叫才能啟用
function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
  localStorage.setItem(LOCAL_STORAGE_LIST_SELECTED_ID_KEY, JSON.stringify(selectedId));
}

//針對html元素的render
//===>你要想的是，你是針對data下去長元素，先有data才會有html element，
//所以若你是要清除html element->你應該想的是如何清除data
function render() {
  renderList();
  
  const selectedList = lists.find(list => list.id === selectedId)
  if (selectedId == null) {
    listDisplayContainer.style.display = 'none';
  } else {
    listDisplayContainer.style.display = '';
    listTitleElement.innerText = selectedList.name;
    //改變task項目
    renderTask(selectedList);
    //改變count
    
  }
}

//selectedList的作用域原本被封存在某個function裡頭，可現在他被作為參數傳入一個function，
//其作用域就被擴展了！(可以想像成他從一個function跳到另一個function裡)
function renderTask(selectedList) {
  clearElement(tasksContainer);
  selectedList.tasks.forEach(task => {
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkbox = taskElement.querySelector('[type="checkbox"]');
    checkbox.id = task.id;
    const label = taskElement.querySelector('label');
    label.htmlFor = task.id;//可能因為for在js裡是保留字
    label.append(task.name);
    tasksContainer.appendChild(taskElement);
  })
}

function renderTaskCount(){

}

function renderList() {
  //把所有element都清除
  clearElement(listsContainer);
  lists.forEach(list => {
    const listElement = document.createElement('li');
    listElement.classList.add('list-name');
    listElement.innerText = list.name;
    listElement.dataset.listId = list.id;
    if (selectedId === list.id) {
      listElement.classList.add('active-list');
    }
    listsContainer.appendChild(listElement);
  })
}



function clearElement(element) {
  while (element.firstChild) {
    //這邊注意removeChild跟remove的差異
    element.removeChild(element.firstChild);
  }
}

render();