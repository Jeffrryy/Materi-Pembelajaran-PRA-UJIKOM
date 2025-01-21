import React, { useEffect, useState } from 'react'

const MyComponents = () => {
    const URL = ""
    const [data,setData] = useState(null)
    useEffect(() => {
        fetch(URL)
        .then(response => response.json())
        .then(json => setData(json))
    },[])

    if(!data) {
        return <p>Loading.......</p>
    }
  return (
    <div>
    {data.map(item => (
        <li key={item.EMPLOYEE_ID}>{item.FIRST_NAME}</li>
    ))}
    </div>
  )
}

export default MyComponents