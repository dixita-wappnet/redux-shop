import React from 'react'

export default function UpdatedObject() {

    const person = {
        name: "John",
        address:{
            country: "USA",
            city:"San Francisco"
        }         
    };
    // const updated = Object.assign({}, person, {name: "Job", age: 30});
       
    const updated2 = {...person, name: "Bob"};
    updated2.address.city = "New York";

   
    

  return (
    <div>
      {/* {console.log(updated)}; */}
      {console.log(person)};
      {console.log(updated2)};
    </div>
  )
}
