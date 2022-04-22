import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="" alt="" />
        <Avatar className='sidebar__avatar'/>
        <h2>Diego Lucas</h2>
        <h4>lukasxdp@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        
      </div>
    </div>
  )
}

export default Sidebar