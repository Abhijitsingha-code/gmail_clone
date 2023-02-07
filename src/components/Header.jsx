import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, logout } from '../features/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const signout = ()=>{
        signOut(auth)
        .then(()=>{
            dispatch(logout())
        });
        
    }
  return (
    <div className='header'>
        <div className="header_left">
            <IconButton>
                <MenuIcon/>
            </IconButton>
            <img src="https://img.icons8.com/bubbles/256/gmail-new.png" alt="" />
            <span>Gmail</span>           
        </div>

        <div className="header_middle">
            <SearchIcon/>
            <input type='text' placeholder='Search mail'/>
            <ArrowDropDownIcon className='header_inputCart'/>
        </div>

        <div className="header_right">
            <IconButton>
                <AppsIcon/>
            </IconButton>
            <IconButton>
                <NotificationsIcon/>
            </IconButton>
            <Avatar onClick={signout} src={user?.photoUrl}/>
        </div>
    </div>
  )
}

export default Header