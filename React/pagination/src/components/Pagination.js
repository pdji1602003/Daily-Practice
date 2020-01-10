import React from 'react'

export default function Pagination(props) {
  const {
    paginate,
    totalPosts,
    postsPerPage
  } = props

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }


  return (
    <nav aria-label="page navigation" className="mt-3">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li className="page-item" key={number}>
            <a 
              className="page-link" 
              href="!#"
              onClick={()=>paginate(number)}
            >
              {number}
            </a>
          </li>
        )
        )}
      </ul>
    </nav>
  )
}
