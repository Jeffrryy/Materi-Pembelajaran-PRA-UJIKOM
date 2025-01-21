import React, { useRef } from 'react'

const MyComponents = () => {
    const inputRef = useRef(document.createElement("input"))
    const inputFocus = () => {
        inputRef.current.focus()
    }
  return (
    <div>
        <input ref={inputRef} />
        <button onClick={inputFocus}>focus on the input</button>
    </div>
  )
}

export default MyComponents