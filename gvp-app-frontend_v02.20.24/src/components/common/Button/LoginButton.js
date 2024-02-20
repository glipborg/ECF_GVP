import React from 'react';
import './Button.css';

const LoginButton = ({ onClick }) => {
    return (
        <div className='button' onClick={onClick}>
            <a href="#">Login</a>
        </div>
    );
};

export default LoginButton;
