import React, { Component } from 'react'
import PostList from './PostList'

class ShowPost extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let key = 0

    console.log(this.props.posts)

    // let bloglist = this.props.posts.map(post => {
    //   key++
    //   return (
    //     <p>
    //       {post.author}
    //     </p>
    //   )
    // })

    return (
      <div>
        <h1>I'm the show page!</h1>
        {/* {bloglist} */}
      </div>
    )
  }
}

export default ShowPost
