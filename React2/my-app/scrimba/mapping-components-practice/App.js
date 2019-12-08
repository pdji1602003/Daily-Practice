import React from 'react'
import products from './products'
import Product from './Product'

function App(){
	const productsComponents = products.map( item => <Product key={item.id} product={item}/>)
	return (
		<div>
			{productsComponents}
		</div>
	)
}

export default App