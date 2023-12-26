import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons'
import Display from './components/Display'

function App() {
  const [buttons, setButton] = useState(["Tab 1","Tab 2","Tab 3"])
  const [current, setCurrent] = useState("")

  return (
    < >
      <Buttons buttons={buttons} setCurrent={setCurrent}/>
      <Display current={current}/>
    </>
  )
}

export default App
