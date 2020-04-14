import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ( { post }) => {
  return (
    <div>
      <h3>{post.attributes.title}</h3>
      <p>{post.attributes.content}</p>
      <Link to={`/posts/${post.id}/edit`}>Edit this post</Link>
    </div>
  )
}

export default PostCard
