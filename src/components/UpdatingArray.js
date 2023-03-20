import React from 'react'

export default function UpdatingArray() {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  // Adding numbers
  const index = numbers.indexOf(2);
  const added = [
    ...numbers.slice(0,index), 
    9, 
    ...numbers.slice(index)
];

  // Removing numbers
  const removed = numbers.filter(n => n !== 2);

  // Updating numbers
  const updated = numbers.map(n => n === 5 ? 20 : n);

  return (
    <div>
      {console.log(numbers)}
      {console.log(added)}
      {console.log(index)}
      {console.log(removed)}
      {console.log(updated)}
    </div>
  )
}
