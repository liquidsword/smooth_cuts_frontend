import React from 'react';
import { updatePost, deletePost } from '../actions/myPosts';
import { setEditFormData, resetNewPostForm } from '../actions/newPostForm';
import { connect } from 'react-redux';
import NewPostForm from './NewPostForm.js';

class EditPostFormWrapper extends React.Component {
  //You would use this (CDM) method to set up any long-running
  //processes or asynchronous processes such as fetching and updating data.
  //It is better to render and display something to your user even if all of your data isn't ready yet.
  componentDidMount() {
    this.props.setEditFormData(this.props.post)

  }

//The componentDidUpdate method is called just after the component
//is rendered and updated. It is possible in componentDidUpdate to
//take some actions without triggering a re-render of the component,
//such as focusing on a specific form input.
  componentDidUpdate(prevProps) {
    this.props.post && !prevProps.post && this.props.setEditFormData(this.props.post)
  }

//In the unmounting (or deletion, or "cleanup") phase, we have
//just one lifecycle method to help us out: componentWillUnmount.
//The componentWillUnmount method is the last function to be called
//immediately before the component is removed from the DOM.
//It is generally used to perform clean-up for any DOM-elements or
//timers created in componentDidMount.
  componentWillUnmount() {
    this.props.resetNewPostForm()
  }

  handleSubmit = (title, content) => {
    const { updatePost, post, history } = this.props
    updatePost({ title, content, postId: post.id }, history)
  }

  render() {
    const { history, deletePost, post } = this.props
    const postId = post ? post.id : null
    return <>
              <NewPostForm editMode handleSubmit = { this.handleSubmit } />
              <br/>
              <button style={{ color: "red "}}
                onClick={() => deletePost(postId, history )}> DELETE THIS POST!</button>
          </>
  }
}

export default connect(null, { updatePost, setEditFormData, resetNewPostForm, deletePost })(EditPostFormWrapper);
