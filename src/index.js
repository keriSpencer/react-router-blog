import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from '/Users/kerispencer/Development/react/react-router-blog/src/components/App.js'
import registerServiceWorker from './registerServiceWorker'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import BaseLayout from './components/BaseLayout'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import ShowPost from './components/ShowPost'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route path="/create" component={CreatePost} />
        <Route path="/show" component={ShowPost} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
