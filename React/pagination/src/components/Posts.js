import React from 'react'

export default function Posts(props) {
  const { 
    posts, 
    loading 
  } = props
  
  let result 
  const listItem = posts.map( post => <li className="list-group-item" key={post.id}>{post.title}</li>)
  const loadingIndication = <h2>Loading...</h2>

  if(loading){
    result = loadingIndication
  } else {
    result = listItem
  }

  return (
    <ul className="list-group">
      {result}
    </ul>
  )
}
