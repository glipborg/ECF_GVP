import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Login.css';

const LoginModal = ({ isOpen, onClose, onOpenRegister }) => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [forgotPassword, setForgotPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Logging in with", email, password);
    };

    const handleForgotPasswordClick = (e) => {
        e.preventDefault();
        console.log("Navigating to forgot password");
        setForgotPassword(true);
    };

    const handleOpenRegisterAndCloseLogin = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
        setForgotPassword(false);
        onClose();
        onOpenRegister();
    };

    return isOpen ? (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content-login" onClick={(e) => e.stopPropagation()}>
                <h2>{t('Modal.Login.Title')}</h2>
                <form onSubmit={forgotPassword ? handleForgotPasswordClick : handleLogin}>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder={t('Modal.Login.ID')} 
                        required 
                    />
                    {!forgotPassword && (
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder={t('Modal.Login.Password')} 
                            required 
                        />
                    )}
                    <button type="submit">{forgotPassword ? t('Button.PassRequest') : t('Button.LogIn')}</button>
                </form>
                {!forgotPassword && (
                    <div>
                        <a href="#ResetPassword" onClick={handleForgotPasswordClick}>{t('Modal.Login.ForgotenPass')}</a>
                        <a href="#Register" onClick={handleOpenRegisterAndCloseLogin}>{t('Modal.Login.Register')}</a>
                    </div>
                )}
            </div>
        </div>
    ) : null;
};

export default LoginModal;
