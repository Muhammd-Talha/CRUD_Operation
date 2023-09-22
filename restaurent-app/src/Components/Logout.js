import React from 'react';
import { useNavigate } from 'react-router-dom'
import './Components.css'


const Logout = () => {
    
    function goto() {
        navigate('/login')
    }
    localStorage.clear();
    const navigate = useNavigate();
    const handleLogout = () => {
        console.log('logout')
        window.location.href = '/Login'
    }
    return (
        <div>
            <div className='log-img'>
                <img src='djlWI.png' alt='logo' />
            </div>
            <div className='log-btn'>
                    <button onClick={goto}>Go To Login Page</button>
                </div>
        </div>
    )

}

export default Logout;
