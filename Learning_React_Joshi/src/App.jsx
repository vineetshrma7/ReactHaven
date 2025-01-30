import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header name="Vineet"></Header>
      <Header name="Sharma"></Header>
      <Header name="World"></Header>
      <Header name="----------"></Header>
    </>
  )
}

export default App
