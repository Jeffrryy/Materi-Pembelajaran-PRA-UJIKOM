
// import React from 'react'
// import MessageWithChildren from './pratikum_08/MessageWithChildren.jsx'
// import FormatDate from './pratikum_08/FormatDate.jsx'
// import Message from './pratikum_08/Message.jsx'
// import "./App.css"
// const App = () => {
//   return (
//     <div className='app'>
//       <FormatDate date={new Date()}/>
//       <Message text=" the form has been submited" isImportant={true}/>
//       <MessageWithChildren isImportant={true}>
//         <b>The form has been submited</b>
//         <i>Your request will be processed</i>
//       </MessageWithChildren>
//     </div>
//   )
// }

// export default App  
import React from 'react'
import "./App.css"
import Header from './pratikum_09/Header'
import Counter from './pratikum_09/Counter'
import MyComponents from './pratikum_11_useEffect/MyComponents'
import Muter from './pratikum_11_useEffect/Muter'
import HitungManual from './pratikum_11_useEffect/HitungManual'
import HitungRender from './pratikum_12/HitungRender'
import MyComponentss from './pratikum_12/MyComponents'
const App = () => {
  return (
    <div>
      <MyComponentss/>
    </div>
  )
}

export default App