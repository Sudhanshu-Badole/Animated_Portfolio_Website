import React from 'react'

const ToggleButton = ({setOpen}) => {
  return (
    <div>
    <button onClick={()=>setOpen(prev=>!prev)}>
        Button
        </button>
    </div>
  )
}

export default ToggleButton