import React from 'react'
import { useState } from 'react'
const Props = (props) => {
    const [hitungan,setHitungan] = useState(0)
  return (
    <div>
        <p>{props.nama},mengklik sebanyak {hitungan}</p>
        <button onClick={() => setHitungan(hitungan+1)}>asd</button>
    </div>
  )
}

export default Props