/* 
Pass a local variable inside a function to another function
我的問題是：一個作用域被限制在特定function裡的變數(local variable)要如何被其他function所取用 
會產生此問題是因為在看Web Dev Simplified關於todo的教程時，看到以下程式碼：

function render() {
  clearElement(listsContainer)
  renderLists()

  const selectedList = lists.find(list => list.id === selectedListId)
  if (selectedListId == null) {
    listDisplayContainer.style.display = 'none'
  } else {
    listDisplayContainer.style.display = ''
    listTitleElement.innerText = selectedList.name
    renderTaskCount(selectedList)
    clearElement(tasksContainer)
    renderTasks(selectedList)
  }
}

function renderTaskCount(selectedList) {
  const incompleteTaskCount = selectedList.tasks.filter(task => !task.complete).length
  const taskString = incompleteTaskCount === 1 ? "task" : "tasks"
  listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`
}
其中selectedList只有在一個function裡被declare，是個local variable，但卻可以被其他function所取用，
由此假設如下：我可以在一個function裡宣告local variable，若我想針對這變數做些其他什麼事情，
基於一個function最好就是只包含一個功能，而不要有太多其他複雜的功能，
這樣我可以透過在當前function裡調用其他function，來將此本地變數外包出去。
對，其實就是外包的概念，一個function就是一個工廠嘛！假設我今天要產出一個麵包好了，
那我在麵包工廠製作麵包，可是交付在消費者面前的是包裝好的麵包，而不是烘焙好的麵包而已。
這時我就要在我的麵包工廠將我的麵包移交到另一個包裝工廠，這就是在function內調用其他function的概念。
透過以下實作來測試一下：
*/

function breadFactory(){
	let bread = 'bread';
	wrapping(bread);
}

function wrapping(){
	bread = 'bread in wrapping';
	return bread;
}
console.log(wrapping());

breadFactory();

function func1(){
	let var1 = 12;
	//我真的可以把他想像成麵包在地移轉到其他工廠，在返回麵包工廠進行後續加工。
	//把var1的值丟進func2工廠，處理完畢後將結果儲存在 result變數，再針對這個result進行後續動作。
	let result = func2(var1);//func2結果
	console.log(result);
	return 'func1結果'
}

function func2(var1){
	console.log(var1);
	return 'func2結果';
}

console.log(func1());//func1結果


