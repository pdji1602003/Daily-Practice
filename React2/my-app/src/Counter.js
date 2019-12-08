import React, { Component } from 'react'
//基於我們對於import的理解，我們理解到React是React library的default class，而component不是default，而是react的附屬function。
//我們理解到api的真正意涵，即是他人寫好的functions名稱。
export default class Counter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			// 在constructor裡使用state去儲存component初始化資料
			count: props.initialCount
		}
	}

	render() {
		return (
			<div>
				{/* 使用箭頭函數的若，就無需使用bind()? */}
				<button onClick={() => this.handleClick(-1)}>-</button>
				<span>{this.state.count}</span>
				<button onClick={() => this.handleClick(1)}>+</button>
			</div>
		)
	}

	handleClick(amount) {
		this.setState((prevState) => {
			return { count: prevState.count + amount }
		})
	}
}