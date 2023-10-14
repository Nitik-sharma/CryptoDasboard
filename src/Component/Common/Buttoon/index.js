import React from 'react'
import './style.css'
function Button({text,onclick,outLined}) {
  return (
    <div className={outLined?"outlied-btn":'btn'} onClick={()=>onclick()}>
      {text}
    </div>
  )
}

export default Button
