import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [count,setcount]=useState(0);
// let count = 15;
let addvalue = () => {
  count=count+1;
  setcount(count);
  
}
let remvevalue = () => {
if(count>0){
  count=count-1;
  setcount(count);

}
}
  return (
    <>
  <h1>Chai Our React</h1>
  <h2>Counter: {count}</h2>
  <button onClick={addvalue}>Add Value {count}</button><br/><br />
  <button onClick={remvevalue}>Remove Value {count}</button>
    </>
  )
}

export default App
