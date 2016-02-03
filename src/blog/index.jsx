import React from 'react'
import Firebase from 'firebase'
import Rx from 'rx'

import {
  createUsers, updateUser, pushPosts,
  postsSnapshot$,
  createdPost$, updatedPost$, removedPost$
} from './db.js'

import Posts from './posts.jsx'

export default class Blog extends React.Component {
  render() {
    return (
      <div>
        <Posts posts={this.state.posts}/>
      </div>
    )
  }

  componentDidMount() {
    this.db= new Firebase('https://vivid-torch-7223.firebaseio.com/web/saving-data/fireblog')

    //this.post$= observeSnapshot(this.db).subscribe(posts => this.setState({posts}))
    this.post$= createdPost$(this.db).subscribe(post => {
      this.setState({posts: this.state.posts.concat(post)})
    })

    createUsers(this.db)
    updateUser(this.db)
    //pushPosts(this.db)
  }

  componentWillUnmount() {
    this.post$.dispose()
  }

  state= {
    posts: []
  }
}
