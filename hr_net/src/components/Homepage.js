import React from 'react';
import Form from './Form'
import logo from "../img/logo_hr.png"

function Homepage(props) {
    return (<>
        <div className="title">
            <img className='logo' src={logo} alt="logo rh net " />
        </div>
        <Form />
        </>

    );
}

export default Homepage;