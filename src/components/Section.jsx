import React from 'react'
import './Section.css'

const Section = ({Icon, title, color, selected}) => {
  return (
    <div className={selected ? 'section section_selected' : 'section'}
        style={{borderBottom:`3px solid ${color}`,
                color:`${selected && color}`}}
    >
            <Icon/>
            <p>{title}</p>
    </div>
  )
}

export default Section