import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter] = useState(5)
  // let counter = 5

  const addValue=()=>{
    console.log("clicked",counter);
    if(counter<20){
      counter++;
      setCounter(counter);
    }
  }

  const remValue=()=>{
    console.log("clicked negative",counter);
    if(counter>0){
      counter--;
      setCounter(counter);
    }
  }

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br/>
      <button
      onClick={remValue}
      >Remove Value {counter}</button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
