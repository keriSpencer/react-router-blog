import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class BaseLayout extends Component {
  render() {
    return (
      <div className="baseLayoutStyles">
        <div className="nav">
          <NavLink to="/create">Create Post</NavLink>
          <NavLink to="/show">Show All Posts</NavLink>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default BaseLayout
