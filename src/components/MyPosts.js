import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MyPosts extends React.Component  {
    constructor(props) {
      super(props);
        this.upVoteAll = this.upVoteAll.bind(this);
        this.increaseVote = this.increaseVote.bind(this);
        this.state = {
          upVote: 0,
          posts: []
        }
    }

    upVoteAll(){
      for (let index = 0; index <= index.length; index++) {
        this.increaseVote(index)
      }
    }

    increaseVote(index) {
      const amount = `amount${index}`;
      this.setState(prevState => ({ [amount]: this.state[amount] + 1}))
    }

    sortList = () => {
      // this.setState({posts.sort((a,b) => this.state.posts.title-b.title)})
        const sortedList = [...this.props.posts].sort((a,b ) => {
          //const firsttitle = a.attributes.title.toUpperCase()
          if (a.attributes.title > b.attributes.title) {
            return 1
          }
          if (a.attributes.title < b.attributes.title) {
            return -1
          }
          return 0
        })
        this.setState(prevState => ({ posts: sortedList}))

         // [].concat(this.props.posts) => [{id, title, etc...}, {}]
    }
// {posts.sort(function(a, b){return a-b})}
    render() {
       if (const {posts} = this.props) {
         return posts
       }
       else {
         sortList
       }
       return (
         <div>
            <button style={{ color: "red"}} onClick={this.sortList}>Sort!</button>

          {posts.map(post => <Post title={post.attributes.title} id={post.id}/>)}
         </div>
       )
   }
 }

 class Post extends React.Component {
   constructor() {
     super();
     this.increment = this.increment.bind(this)
       this.state = {
         upVote:  0,
       }
   }

   increment() {
     this.setState({upVote: this.state.upVote + 1 })
   }

   render () {
     const { title, id } = this.props;

     return (
             <div key={ id }>
               <p key={id}><Link to={`/posts/${id}`}>{title}</Link></p>
               <button className='increment' style={{ color: "green"}} onClick= {this.increment}>{this.state.upVote}</button>
             </div>
           )
   }
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
