import React from 'react'
import {FaSignInAlt, FaSignOutAlt} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {logout, reset} from '../features/auth/authSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/admin')
    }
  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/admin/login'>PlacesSetter</Link>
        </div>
        <ul>
            
            
            {user ? (<>
                <li>
                    <button className='btn' to='/admin/login' onClick={onLogout}>
                        <FaSignInAlt /> Logout
                    </button>
                </li></>) : (<>
             <li>
                <Link to='/admin/login'>
                    <FaSignInAlt /> Login
                </Link>
            </li>
            <li>
                <Link to='/admin/register'>
                    <FaSignOutAlt /> Register
                </Link>
            </li>
            </>)}
        </ul>
    </header>
  )
}

export default Header