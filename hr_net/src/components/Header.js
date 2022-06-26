import React from 'react';
import logo from "../img/logo_hr.png"

function Header() {
    return (
        <div className='header'>
            <div className='topColor'></div>
            <div className="title">
                <img className='logo' src={logo} alt="logo rh net " />
            </div>
        </div>
    );
}

export default Header;