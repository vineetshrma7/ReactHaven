import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="Vineet Sharma" btntext="Click Me!"/>
      <Card username="Vishal Singh" btntext="Visit Me!"/>
      
    </>
  )
}

export default App
