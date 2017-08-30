import React, { Component } from 'react'
import ShowPost from './ShowPost'

class PostList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      author: '',
      title: '',
      blogPost: '',
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/').then(r => r.json()).then(data => {
      this.setState({ posts: data })
      console.log(data)
    })

    let fetchData = e => {
      e.preventDefault()
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/').then(r => r.json()).then(data => {
        this.setState({ posts: data })
      })
    }
  }

  render() {
    return (
      <div>
        <h2>Coming in from Post List</h2>
        <ShowPost posts={this.state.posts} />
      </div>
    )
  }
}

export default PostList
