import React from 'react';

const PostCard = ( { post }) => {
  return (
    <div>
      <h3>{post.attributes.title}</h3>
      <p>{post.attributes.content}</p>
    </div>
  )
}

export default PostCard
