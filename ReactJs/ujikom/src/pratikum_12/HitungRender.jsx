import React, { useEffect, useRef, useState } from 'react'

const HitungRender = () => {
    const [inputValue,setInputvalue] = useState("")
    const count = useRef(0)

    useEffect(() => {
        count.current = count.current + 1
    })
  return (

    <div>
        <input type="text"
                value={inputValue}
                onChange={(e) => setInputvalue(e.target.value)} />
                <h1>render Count = {count.current}</h1>
    </div>
  )
}

export default HitungRender