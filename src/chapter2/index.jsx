import React from 'react'
import Firebase from 'firebase'
const db= new Firebase('https://vivid-torch-7223.firebaseio.com/web/data')

/*
db.child('users/mg/name') => access JSON node database/users/mg/name

 Ways to save data
 set({})
 set(null) -> remove data
 update()
 push() -> add mew item to a collection
 transaction()
*/
console.log(Firebase)

export default class Chapter2 extends React.Component {
  render() {
    return <div></div>
  }
}
