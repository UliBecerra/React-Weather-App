import React from 'react'

import './ToggleTheme.css'

export default function ToggleTheme({theme, handleTheme}) {
  
  return (
    
    
    <label className='switch m-3'>
      <input  type="checkbox"  onChange={handleTheme} />
      <span className='slider'></span>
    </label>
  
  
  )
}
