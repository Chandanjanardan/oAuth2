import React from 'react'
import { posts } from '../data'
import { useLocation } from 'react-router-dom'


function Post() {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const post = posts.find(P=>P.id.toString()===path)
    console.log(location)

  return (
    <div className='post'>
           <img src='' alt=" " className='postImg'/>
           <h1 className='postTitle'>{post.title}</h1>
           <p className='postDesc'>{post.title}</p>
           <p className='postionDesc'>{post.desc}</p> 
    </div>
  )
}

export default Post
// adding coments