import React from 'react'
import Joke from './Joke'
import jokesData from './jokesData'


function App(){
	const jokesComponent = jokesData.map( joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>)
	
	return (
		<div>
			{jokesComponent}
		</div>

	)
}

export default App