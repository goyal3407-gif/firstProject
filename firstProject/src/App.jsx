import React, { useState } from 'react'

const App = () => {
  let [count ,setcount]= useState(2);
  return (
    <div><h1>
      Helooo {count}</h1>
      <button onClick={()=>{
setcount(count*count);

      }}>Increment</button>
      </div>

)
}

export default App