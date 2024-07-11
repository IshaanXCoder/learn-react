import { useState } from 'react'
import './App.css'

let counter = 0

function countInc(){
  counter = counter + 1
  console.log(counter)
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React course</h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={countInc}>Add value</button> {"  "}
      <button>Remove value</button>
    </>
  )
}

export default App
