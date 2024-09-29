import React, { Children } from 'react'

function Paragraph({children}) {
  return (
    <p className='text'>{children}</p>
  )
}

export default Paragraph