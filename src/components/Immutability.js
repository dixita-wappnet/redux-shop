import React from 'react'

export default function Immutability() {

  const name = "Web Developer";
  
  const newName = name.toUpperCase();

  const book ={

    title: "7 Habits of Highly Effrctive People",
    author: "Stephen Covery",
    pages: 381

  }

  const book2 = {
      ...book,
      pages: 400
  }
 
  return (
    <div>
      {name}
      <br/>
      {newName}
      <br/>
      {book.pages}
      <br/>
      {book.title}
      <br/>
      {book.pages}
      <br/>
      {book2.pages}
    </div>
  )
}
