import React from 'react'

// const Header = () => {
//   return (
//     <div>
//         <h1 style={{backgroundColor:"lightblue"}}>sas </h1>
//         <p>Add a litte style</p>
//     </div>
//   )
// }
//JS OBJECT
const Header = () => {
    const myStyle = {
        color:"white",
        backgroundColor:"DodgerBlue",
        padding:"10px",
        fontFamily:"Sans-Serif"
    }
  return (
    <div>
        <h1 style={myStyle  }>sas </h1>
        <p>Add a litte style</p>
    </div>
  )
}



export default Header