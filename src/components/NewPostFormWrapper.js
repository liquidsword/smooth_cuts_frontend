import React from 'react';
import { createPost } from '../actions/myPosts';
import { connect } from 'react-redux'
import NewPostForm from './NewPostForm.js'

const NewPostFormWrapper = ({ history, createPost }) => {

  const handleSubmit = (title, content, userId) => {
    createPost({ title, content, userId }, history)

  }
    return <NewPostForm history={history} handleSubmit={handleSubmit} />
}

export default connect(null, { createPost })(NewPostFormWrapper);
