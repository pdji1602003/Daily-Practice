import React from 'react'

function Joke(props) {
	return (
		<div className="joke-container">
			<p style={{display: !props.question && 'none'}}>Question: {props.question}</p>
			<p>Punchline: {props.punchLine}</p>
		</div>
	)
}

export default Joke