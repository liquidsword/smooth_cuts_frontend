import React from 'react';
import PostCard from './PostCard.js'
import { connect } from 'react-redux';


const MyPosts = props => {
  const postCards = props.posts.length > 0 ? props.posts.map(p => <PostCard post={p} key={p.id}/>) : null
  return (
    postCards
  )
}

const mapStateToProps = state => {
  return {
    posts: state.myPosts
  }
}
//we provide mapStateToProps to Redux in order to tell Redux:
//to please provide us access to your state so that we can pick and choose
//the pieces of state we would like available to this particular component as props
export default connect(mapStateToProps)(MyPosts)
