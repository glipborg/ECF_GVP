import React from 'react';
import './Button.css';

const ContactButton = ({ onClick }) => {
    return (
        <div className='button' onClick={onClick}>
        <a href="#contact">Contact</a>
        </div>
    );
};

export default ContactButton;

