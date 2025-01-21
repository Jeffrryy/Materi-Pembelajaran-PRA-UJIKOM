import React, { useEffect,useState} from 'react'

const Muter = () => {
    const [count,setCount] = useState(0)
    useEffect(()=> {
        setTimeout(() => {
            setCount((count) => count + 1)
        }, 100);
    },[])
  return (
    <div>
        <h1>saya sudah berputar sebanyak {count} kali</h1>
        
    </div>
  )
}

export default Muter