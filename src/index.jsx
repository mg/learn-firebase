import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRedirect } from 'react-router'

import Main from './main.jsx'
import Blog from './blog'

render((
  <Router>
    <Route path='/' component={Main}>
      <IndexRedirect to='blog'/>
      <Route path='blog' component={Blog} />
    </Route>
  </Router>
), document.getElementById('app'))

/*
https://www.firebase.com/docs/web/guide/saving-data.html
https://vivid-torch-7223.firebaseio.com/
https://vivid-torch-7223.firebaseio.com/web/data
*/
