import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Components.css'
const PageNofound = () => {
    const navigate = useNavigate();
    function naviget() {
        navigate('./')
    }
    return (
        <div className='pageno'>
            <img src='./404-error-cloudways-landing-page-1024x534.png' alt='Logo' />
            <div>
                <button onClick={naviget} className='pagebtn'>Go To Home Page</button>
            </div>
        </div>


    );
}

export default PageNofound;
