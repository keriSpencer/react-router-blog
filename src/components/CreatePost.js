import React, { Component } from 'react'
import '../styles/index.css'
// import ShowPost from './ShowPost'

class CreatePost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      author: '',
      title: '',
      blogPost: '',
      posts: []
    }
  }

  _author = e => {
    this.setState({
      author: e.target.value
    })
  }

  _title = e => {
    this.setState({
      title: e.target.value
    })
  }

  _blogPost = e => {
    this.setState({
      blogPost: e.target.value
    })
  }

  _addToPosts = e => {
    e.preventDefault()
    const { author, title, blogPost } = this.state

    console.log(this.state)
    let postItem = JSON.stringify({ author, title, blogPost })
    const url = 'https://tiny-lasagna-server.herokuapp.com/collections/blogger/'

    fetch(url, {
      method: 'POST',
      body: postItem,
      headers: {
        Accept: 'application/JSON',
        'Content-type': 'application/JSON'
      }
    })
      .then(r => r.json())
      .then(data => {
        // console.log(data)
      })

    this.setState({ author: '', title: '', blogPost: '' })
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this._addToPosts}>
          <h2>I am Creating a Post!</h2>
          <h4>Author's Name</h4>
          <input name="author" value={this.props.author} onChange={this._author} />
          <h4>Title</h4>
          <input name="title" value={this.props.title} onChange={this._title} />
          <h4>Write Your Blog...</h4>
          <textarea name="blogPost" value={this.props.blogPost} onChange={this._blogPost} />
          <input className="submit" type="submit" />
        </form>
      </div>
    )
    // return <ShowPost posts={this.state.posts} />
  }
}

export default CreatePost
