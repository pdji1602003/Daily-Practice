import React from 'react'
import Joke from './Joke'

function App() {
	return (
		<>
			<Joke
				punchLine="It’s hard to explain puns to kleptomaniacs because they always take things literally." 
			/>

			<Joke
				question="Did you hear about the mathematician who's afraid of negative numbers?"
				punchLine="He'll stop at nothing to avoid them!"
			/>

			<Joke
				question="Hear about the new restaurant called Karma?"
				punchLine="There’s no menu: You get what you deserve."
			/>

			<Joke
				question="Did you hear about the actor who fell through the floorboards?"
				punchLine="He was just going through a stage."
			/>

			<Joke
				question="Did you hear about the claustrophobic astronaut?"
				punchLine="He just needed a little space."
			/>
		</>
	)
}

export default App