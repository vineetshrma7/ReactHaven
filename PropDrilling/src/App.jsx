import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassA from "./ClassA"

function App() {
  const [count, setCount] = useState(0)
  const name = "Vineet"

  return (
    <>
      <ClassA name={name}/>
    </>
  );
}

export default App
