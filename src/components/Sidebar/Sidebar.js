import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import './Sidebar.css'
const Sidebar = () => {
  const randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
  }
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{ topic }</p>
    </div>
  )
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://i.pinimg.com/474x/2d/e8/82/2de882cd4f3992ada3d609e3a183f7a4.jpg" alt="" />
        <Avatar className='sidebar__avatar' src={user.photoUrl}>
          {user.email[0]}
        </Avatar>
        <h2>{ user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">{ randomInt(5, 150)}</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">{ randomInt(100, 2000)}</p>
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