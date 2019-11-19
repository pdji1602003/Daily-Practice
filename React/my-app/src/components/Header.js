import React from 'react'

function Header(){
	return (
		//className只可以用在react element上，而無法用在react component上
		//這邊會使用className而不是一般的class，是因為react使用了js的api，所以這邊是按照原生js對於className的寫法
		<header className="header">
			This is the header
		</header>
	)
}

export default Header