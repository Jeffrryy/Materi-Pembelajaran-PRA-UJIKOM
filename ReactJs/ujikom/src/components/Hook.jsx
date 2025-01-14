import React from 'react'
import { useState } from 'react'
const Hook = () => {
    const [hitung, setHitung] =useState(0)
  return (
    
    <div>
        <p>anda mengklik {hitung} kali</p>
        <button onClick={() => setHitung(hitung+1)}>asdad</button>
    </div>
  )
}

export default Hook