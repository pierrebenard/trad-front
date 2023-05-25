import React from 'react'
import '../css/errorMsg.css'

const errorMsg = (props) => {
  return (
    <div className='error-msg'>
        <p>{props.title}</p>
    </div>
  )
}

export default errorMsg;