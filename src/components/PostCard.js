import React from 'react';

const PostCard = ( { post }) => {
  return (
    <p>{post.attributes.title}</p>
  )
}

export default PostCard
