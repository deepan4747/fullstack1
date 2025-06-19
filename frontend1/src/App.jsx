import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Welcome name='Deepan' country='India'/>
      <h1>Hello World</h1>
    </>
  )
}

export default App
