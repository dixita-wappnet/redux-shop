import React from 'react'
import {produce} from 'immer';

export default function Immer() {

  let book = {title: "Harry Potter"};
  let updated = publish(book)
  

  function publish(book) {
    return produce(book, draftBook => {
    draftBook.isPublished = true;
});

   
}

  return (
    <div>
      
      {console.log(book)}
      {console.log(updated)}
    </div>
  )
}
