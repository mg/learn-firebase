import React from 'react'

const Post= ({author, title}) =>
  <div>
    <h3>{title}</h3>
    <h4>by {author}</h4>
  </div>

const Posts= ({posts}) =>
  <ul>
    {posts.map(post => <li key={post.key}><Post {...post}/></li>)}
  </ul>

export default Posts
