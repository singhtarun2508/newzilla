import React from 'react'

export default function Button() {
  const hello=()=>{console.log("helo")}
  return (
    <div>
      <button className="btn btn-outline-success" onClick={hello}>Search</button>
    </div>
  )
}
