import React from 'react';
import { updateNewPostForm } from '../actions/newPostForm.js'
import { connect } from 'react-redux'

const NewPostForm = ({ title, comment, history }) => {
  const handleChange = event => {
    const { name, value } = event.target
    updateNewPostForm(name, value)
  }

  const handleSubmit = event => event.preventDefault()

  return (
  <form onSubmit={handleSubmit}>
    <input
      placeholder= "title"
      name="title"
      onChange={handleChange}
      value={title}
    /><br/>
    <input
      placeholder= "comment"
      name="comment"
      onChange={handleChange}
      value={comment}
    /><br/>
    <input
      type="submit"
      value="Create Post"/>
  </form>
)};

const mapStateToProps = state => {
  const { title, comment } = state.newPostForm
  return {
    title,
    comment
  }
}

export default connect(mapStateToProps, { updateNewPostForm })(NewPostForm);
