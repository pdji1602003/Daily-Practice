import React, { useState, useEffect } from 'react'
import Posts from './components/Posts'
import Pagination from './components/Pagination'
import axios from 'axios'

export default function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }

    fetchPosts()
  }, [])

  //Get current posts
  const LastPostIndex = currentPage * postsPerPage  
  const FirstPostIndex = LastPostIndex - postsPerPage
  const currentPosts = posts.slice(FirstPostIndex, LastPostIndex)


  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className="container mt-5">
      <h1 className="text-primary">Pagination Practice</h1>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination
        paginate={paginate}
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
      />
    </div>
  )
}


