import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{ topic }</p>
    </div>
  )
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://media-exp1.licdn.com/dms/image/C5616AQEW9r3O1tNiMw/profile-displaybackgroundimage-shrink_350_1400/0/1616220379011?e=2147483647&v=beta&t=GXPsjO7b5_bwz25fqpWNdE30GA37Tzt_wHackbQ8Rqs" alt="" />
        <Avatar className='sidebar__avatar'/>
        <h2>Diego Lucas</h2>
        <h4>lukasxdp@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">51</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">551</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactJS')}
        {recentItem('nodeJS')}
        {recentItem('frontend')}
        {recentItem('fullstack')}
        {recentItem('developer')}
      </div>
    </div>
  )
}

export default Sidebar