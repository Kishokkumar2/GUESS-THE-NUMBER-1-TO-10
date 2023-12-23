import React, { useState } from 'react'
import "./Game.css"
import Result from './Result'
const random=Math.floor(Math.random()*10)+1

console.log("ran",random)
const Game = () => {
  const [set,setNew]=useState('')
  console.log("s",set)

  const number=(e)=>{
    e.preventDefault()
    setNew(e.target.value)

  }
  return (
  <main>
    <div>
    <label className="a">GUESS THE NUMBER 1 to 10</label>
    </div>
    <div >
    <input 
    type="text"
    onChange={number}
    />
    <Result
    random={random}
    set={set}
    
    />
    </div>
    
  </main>
  )
}

export default Game