import React from 'react'
import './SidebarOptions.css'

const SidebarOptions = ({Icon,text,number, active}) => {
  return (
    <div className={`sidebarOption ${active && 'sidebarOptionActive'}`}>
        <Icon/>
        <h4>{text}</h4>
        <p>{number}</p>
    </div>
  )
}

export default SidebarOptions