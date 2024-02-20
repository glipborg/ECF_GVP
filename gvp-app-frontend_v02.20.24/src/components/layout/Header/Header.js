import React, { useState } from 'react';
import LanguageSelector from '../../LanguageSelector';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import ContactButton from '../../common/Button/ContactButton';
import LoginButton from '../../common/Button/LoginButton';
import LoginModal from '../../common/Modal/Login'; 
import './Header.css';

const Header = () => {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);

    const handleOpenLoginModal = () => {
        setLoginModalOpen(true);
    };
    const handleCloseLoginModal = () => {
        setLoginModalOpen(false);
    };

    return (
        <header className="header">
            <div className="right">
                <div className="logo">
                    <Logo />
                </div>
            </div>
            <div className="center">
                <div className="navigation">
                    <Navigation />
                </div>
            </div>
            <div className="right">
                <div className="right-group">
                    
                    <div className="">
                        <ContactButton />
                    </div>
                    <div className="">
                        <LoginButton onClick={handleOpenLoginModal} />
                    </div>
                </div>
                                
                <div className="language-selector">
                    <LanguageSelector />
                </div>
            </div>

           <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} />
        </header>
    );
};

export default Header;
