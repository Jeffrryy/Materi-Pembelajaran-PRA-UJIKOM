import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const [count,setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }
  return (
    <div>
        <button type='button' onClick={handleIncrement}>
        Increase
        </button>
        <div>{count + "yeah"}</div>
    </div>
  )
}

export default Counter