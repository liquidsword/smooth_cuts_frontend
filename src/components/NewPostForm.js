import React from 'react';
import { createPost } from '../actions/myPosts.js'
import { updateNewPostForm } from '../actions/newPostForm.js'
import { connect } from 'react-redux'

const NewPostForm = ({ title, content, history, updateNewPostForm, userId, post, handleSubmit, editMode }) => {
  const handleChange = event => {
    const { name, value } = event.target
    updateNewPostForm(name, value)
  }

  return (
  <form onSubmit = { event => {
        event.preventDefault()
        handleSubmit(title, content)
      }}>
    <input
      placeholder= "title"
      name="title"
      onChange={handleChange}
      value={title}
    /><br/>
    <textarea
      placeholder= "content"
      name="content"
      onChange={handleChange}
      value={content}
    /><br/>
    <input
      type="submit"
      value={ editMode ? "Update Post" : "Create Post" }/>
  </form>
)};

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ""
  const { title, content } = state.newPostForm
  return {
    title,
    content,
    userId
  }
}

export default connect(mapStateToProps, { updateNewPostForm })(NewPostForm);
