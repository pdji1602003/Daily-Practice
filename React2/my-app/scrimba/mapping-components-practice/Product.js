import React from 'react'

function Product(props) {
	return (
		<div>
			{/* 要注意到的是，props後面緊接著就是我們自訂的property */}
			<h2>{props.product.name}</h2>
			<p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {props.product.description}</p>
		</div>
	)
}

export default Product