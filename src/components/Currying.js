import React from 'react'

export default function Currying() {

    let data = "Good Morning";

    const wrap = (type,str) => `<${type}>${str}</${type}>`;

  return (
    <div>
      {wrap("div", data)};
      <br/>
      {wrap("span",data)}
      <br/>
      {wrap("h5", data)}
    </div>
  )
}


