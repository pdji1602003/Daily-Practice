import React from 'react'
//function component預設接受一個參數props(是properties的縮寫)，為一個代表此component所有properties資料的物件
function ContactCard(props) {
	//contact本身就是一個物件，所以若要取得contact底下的屬性，則需要使用'.'語法
	return (
		<div className="contact-card">
			<img src={props.contact.imgUrl} />
			<h3>{props.contact.name}</h3>
			<p>Phone: {props.contact.phone}</p>
			<p>Email: {props.contact.email}</p>
		</div>
	)
}

export default ContactCard