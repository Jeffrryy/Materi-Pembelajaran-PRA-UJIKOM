import React from 'react'
import { Children } from 'react'
const MessageWithChildren = ({Children,isImportant = false}) => {
  return (
    <div>
        {isImportant ? "Important Message" : "Reguler Message"}
        {Children}
    </div>
  )
}

export default MessageWithChildren