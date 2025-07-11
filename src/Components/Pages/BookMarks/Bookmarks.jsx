import { useEffect, useState } from 'react'
import { deleteBlog, getBlogs } from '../../Utility/index'
import EmptyState from '../../emtystate/EmptyState'

import Blog from '../../Blog/Blog'

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const savedBlogs = getBlogs()
    setBlogs(savedBlogs)
  }, [])

  const handleDelete = id => {
    deleteBlog(id)
    const savedBlogs = getBlogs()
    setBlogs(savedBlogs)
  }

  if (blogs.length < 1) {
    return (
      <EmptyState
        message='No Bookmarks Found'
        address='/blogs'
        label='Browse Blogs'
      />
    )
  }

  return (
    <section className='px-4 sm:px-8 lg:px-12 py-8'>
      <div className='container max-w-6xl py-6 mx-auto space-y-6 sm:space-y-12'>
        <div className='grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {blogs.map(blog => (
            <Blog
              key={blog.id}
              blog={blog}
              deletable={true}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Bookmarks
