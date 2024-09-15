import { useState } from 'react'
import './App.css'
import Cards from "./components/Cards"
import ThemeBtn from "./components/ThemeBtn"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <ThemeBtn />
      
      <Cards />
    </>
  )
}

export default App
