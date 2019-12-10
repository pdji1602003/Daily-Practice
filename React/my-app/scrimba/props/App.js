import React from 'react'
import ContactCard from './ContactCard'

function App() {
	return (
		<div className="contacts">
			<ContactCard
				contact={{
					name: "Mr. Whiskerson",
					imgUrl: "http://placekitten.com/300/200",
					phone: "(212) 555-1234",
					email: "mr.whiskaz@catnap.meow"
				}}
			/>
			<ContactCard
				contact={{ name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow" }}
			/>
			<ContactCard
				contact={{ name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow" }}
			/>
			<ContactCard
				contact={{ name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow" }}
			/>
		</div>

	)
}

export default App