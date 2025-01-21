
import React from 'react'
import Pertama from '../components/pertama'
import Kedua from '../components/Kedua'
import Ketiga from '../components/Ketiga'
import Hook from '../components/Hook'
import LampuLaluLintas from '../components/State'
import Props from '../components/Props'
import StudentName from './StudentName'
import List from './List'

const App = () => {

  const allStudents = {
    data : [
      { name:"agus"},
      { name:"bagas"},
      { name:"alam"}
    ]
  }

  return (
    <div>
      <StudentName/>
      <ul>
        {allStudents.data.map(item => (<List data={item}/>))}
      </ul>
      </div>
  )
}

export default App