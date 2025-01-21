import React from 'react'

const List = ({data}) => {
  return (
    <div>
        <ul>
            <li>
                {data.name}
            </li>
        </ul>
    </div>
  )
}

export default List