import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Register.css';

const RegisterModal = ({ isOpen, onClose, onOpenLogin }) => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Registering...");
    };

    return isOpen ? (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content-register" onClick={(e) => e.stopPropagation()}>
                <h2>{t('Modal.Register.Title')}</h2>
                <form onSubmit={handleRegister}>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder={t('Modal.Register.ID')} 
                        required 
                    />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder={t('Modal.Register.Password')} 
                        required 
                    />
                    <input 
                        type="password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        placeholder={t('Modal.Register.ConfirmPassword')} 
                        required 
                    />
                    <button type="submit">{t('Button.SignUp')}</button>
                </form>
                <a href="#Register" onClick={onOpenLogin}>{t('Modal.Register.LogIn')}</a>
            </div>
        </div>
    ) : null;
};

export default RegisterModal;
