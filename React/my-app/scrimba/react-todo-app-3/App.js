import React from 'react'
import TodoItem from './TodoItem.js'
import todosData from './todosData.js'

function App() {
	// 要注意到的是item裡的資料就是mapping到todo，我們無需使用全部item這物件裡的所有data，只要在component裡註明哪些資料對應到哪個jsx tag即可。
	// 另外，若我們有成功mapping資料，則將鼠標移動到todo與item上，會出現一個小視窗顯示我們的資料都有對應到。
	const todosComponents = todosData.map( item => <TodoItem key={item.id} todo={item}/>)

	return (
		<div className="todo-list">
			{todosComponents}
		</div>
	)
}

export default App