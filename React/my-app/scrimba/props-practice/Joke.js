import React from 'react'

function Joke(props) {
	return (
		<div className="joke-container">
			{/* 
			當props.question為真值，以預設型態展現，若為falsy，則將none賦予給display。
			而剛有提到說，在我們沒有使用props的情況下，react會將null值賦予給該props，所以若我們沒有在app.js裡使用到props.question，他會被設置成null
			 */}
			<p style={{display:props.question?'':'none'}}>Question: {props.question}</p>
			{/* &&取假值 */}
			<p style={{backgroundColor:!props.question && 'orange'}}>Punchline: {props.punchLine}</p>
		</div>
	)
}

export default Joke