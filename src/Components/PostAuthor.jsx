import React from 'react'
import { useSelector } from 'react-redux'

const PostAuthor = ({userId}) => {
    const user = useSelector((state) => state.users.find((user) => user.id === userId))
  return (
    <div className='font-semibold mt-3 mb-5'>
        by: {user ? user.name : "Anonymous Author"}
    </div>
  )
}

export default PostAuthor