import React from 'react'
import './Header.css'
import { Chat,SupervisorAccount,BusinessCenter, Home,Search, Notifications } from '@mui/icons-material';
import { HeaderOptions } from '../Header/HeaderOptions';
import { useDispatch} from 'react-redux';
import { logout } from '../../features/userSlice';
import { auth } from '../../firebase';
const Header = () => {
  
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    auth.signOut();
  }
  return (
    <div className='header'>
      <div className="header__left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
        <div className="header__search">
          <Search />
          <input type="text" placeholder='Search'/>
        </div>
      </div>
      <div className="header__right">
        <HeaderOptions Icon={Home} title="Home"/>
        <HeaderOptions Icon={SupervisorAccount} title="My Network" />
        <HeaderOptions Icon={BusinessCenter} title="Jobs" />
        <HeaderOptions Icon={Chat} title="Messaging" />
        <HeaderOptions Icon={Notifications} title="Notifications" />
        <HeaderOptions onClick={handleLogout} avatar={true} title="me"/>
      </div>
    </div>
  )
}

export default Header