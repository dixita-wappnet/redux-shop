import React from 'react'
import { Map } from 'immutable'

export default function Immutable() {

  let book = Map({title:"Harry Potter"});

  function publish(book){
    return book.set("isPublished", true);
  }

  return (
    <div>
      {book = publish(book)}
      {console.log(book.toJS())}
    </div>
  )
}
