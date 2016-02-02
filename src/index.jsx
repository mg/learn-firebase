import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRedirect } from 'react-router'

import Main from './main.jsx'
import Chapter2 from './chapter2'

render((
  <Router>
    <Route path='/' component={Main}>
      <IndexRedirect to='c2'/>
      <Route path='c2' component={Chapter2} />
    </Route>
  </Router>
), document.getElementById('app'))

/*
https://www.firebase.com/docs/web/guide/saving-data.html
https://vivid-torch-7223.firebaseio.com/
https://vivid-torch-7223.firebaseio.com/web/data
*/
