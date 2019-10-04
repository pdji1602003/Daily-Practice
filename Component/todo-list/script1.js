// Todo Class:represents todo
//因為我們想要儲存的數據形態複合，所以第一個優先想到使用class打造出一個可以建構相同屬性的object工廠
class Todo {
  constructor(id, name, task) {
    this.id = id;
    this.name = name;
    this.task = task;
  }
}

//UI Class:todo的UI功能
class UI {
  static displayTodos() {
    const taskList = document.querySelector('[data-lists]');
    UI.clearElement(taskList);
    const todos = [
      {
        id: 1,
        name: 'Youtube',
        task: [
          {
            id: 1,
            name: 'record a video',
            complete: false
          },
          {
            id: 2,
            name: 'grocery shopping',
            complete: true
          }
        ]
      },
      {
        id: 2,
        name: 'Work'
      }
    ];
    todos.forEach((todo) => UI.addTodoList(todo));
  }

  static addTodoList(todo) {
    const taskList = document.querySelector('[data-lists]');
    const listItem = document.createElement('li');
    listItem.classList.add('list-name');
    listItem.textContent = todo.name;
    listItem.dataset.listId = todo.id;
    debugger
    listItem.task = todo.task;

    taskList.appendChild(listItem);
  }

  static clearInput() {
    document.querySelector('[data-new-list-input]').value = '';
  }

  static showTodoInfo(selectedListId, selectedListName, selectedListTask) {
    const todoListContainer = document.querySelector('[data-list-display-container]');
    const todoListTitle = document.querySelector('[data-list-title]');
    // const todoListCount = document.querySelector('[data-list-count]');
    if (selectedListId == null) {
      todoListContainer.style.display = 'none';
    } else {
      todoListContainer.style.display = '';
      todoListTitle.textContent = selectedListName;

      //每個id綁定的task內容不一定相同
      UI.showTask(selectedListTask);
      UI.checkItem();
    }
  }

  static showTask() {
    //todo.task.name
    if (selectedListTask == null) return;
    const tasksContainer = document.querySelector('[data-tasks]');
    const task = document.createElement('div');
    //產生動態id，並添加在input以及label上
    const taskId = Date.now().toString();
    task.classList.add('task');
    //但input上綁定的id不確定該如何處理？
    task.innerHTML = `
  <input type="checkbox" id="${taskId}"/>
  <label for="${taskId}">
    <span class="custom-checkbox"></span>
      ${selectedListTask}
  </label>
  `
    tasksContainer.appendChild(task);
  }

  //檢查checkbox checked的數量並反映在* tasks remaining上
  static checkItem() {
    //<p class="task-count" data-list-count="">3 tasks remaining</p>
    const todoListCount = document.querySelector('[data-list-count]');

    const checkboxs = document.querySelectorAll('[type="checkbox"]');
    console.log(checkboxs);
    //返回沒有checked的input
    const unchecked = Array.from(checkboxs).filter(checkbox => checkbox != checkbox.checked);
    console.log(unchecked);
    const uncheckedNum = unchecked.length;
    todoListCount.textContent = `${uncheckedNum} tasks remaning`
  }

  static clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

}

//Store Class:將書儲存在client端

//Event:Display todos
document.addEventListener('DOMContentLoaded', UI.displayTodos);

//Event:Add a todo
document.querySelector('[data-new-list-form]').addEventListener('submit', (e) => {
  e.preventDefault();
  const id = Date.now().toString();
  const name = document.querySelector('[data-new-list-input]').value;
  const task = [];
  //Instantiate todo  一個實例 想一個id not define
  if (name === '' || name == null) {
    alert('Please specify your todo.');
  } else {
    const todo = new Todo(id, name, task);
    UI.addTodoList(todo);
    UI.clearInput();
  }

})

//Event:Show todo info don't nest event
document.querySelector('[data-lists]').addEventListener('click', e => {
  const listItems = document.querySelectorAll('.list-name');
  listItems.forEach(item => item.classList.remove('active-list'));
  if (e.target.classList.contains('list-name') === true) {
    e.target.classList.add('active-list');
    const selectedListId = e.target.dataset.listId;
    const selectedListName = e.target.textContent;
    const selectedListTask = e.target.task;
    UI.showTodoInfo(selectedListId, selectedListName, selectedListTask);

  }
})

//Event:Show todo item in the container
document.querySelector('[data-new-task-form]').addEventListener('submit', e => {
  e.preventDefault();
  //抓取input的值，並把它push到div tasks裡
  const taskInput = document.querySelector('[data-new-task-input]').value;
  const tasksContainer = document.querySelector('[data-tasks]');
  const task = document.createElement('div');
  //產生動態id，並添加在input以及label上
  const taskId = Date.now().toString();
  console.log(taskId);
  task.classList.add('task');
  //但input上綁定的id不確定該如何處理？
  task.innerHTML = `
  <input type="checkbox" id="${taskId}"/>
  <label for="${taskId}">
    <span class="custom-checkbox"></span>
      ${taskInput}
  </label>
  `
  tasksContainer.appendChild(task);
  //清空input的值
  document.querySelector('[data-new-task-input]').value = null;
  //rerender一次taskcontainer
  UI.checkItem();

})

// Event:checkbox狀態若被改變，則需更新task count
document.querySelector('[data-tasks]').addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'input' || e.target.tagName.toLowerCase() === 'label') {
    UI.checkItem();
    console.log('test');
  }
});


//Event:Remove a todo
document.querySelector('[data-delete-list-button]').addEventListener('click', e => {
  //點擊delete btn後刪除帶有active-list的liElement
  //你想針對什麼element做什麼事情，你就去抓取他嘛！
  const listItems = document.querySelectorAll('.list-name');
  console.log(listItems);
  let selectedItem = Array.from(listItems).find(item => item.classList.contains('active-list') === true);
  //移除自身，代表說此list item上綁定的id也會消失
  debugger
  selectedItem.remove();
  //此時在調用以下這個function，id會變成空值，display === 'none'
  UI.showTodoInfo();
})