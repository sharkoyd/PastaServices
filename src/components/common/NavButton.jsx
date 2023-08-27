import React from 'react'

const NavButton = (props) => {
  
  return (
    <div onClick={()=>props.scroll(props.topage)}>{props.value}</div>
  )
}

export {NavButton}