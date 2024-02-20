import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const LanguageSelector = () => {
    const { i18n } = useTranslation();

        const changeLanguage = (event) => {
            i18n.changeLanguage(event.target.value);
        };

    return (
        <select onChange={changeLanguage} value={i18n.language} className="language-selector">
            <option value="fr" className="flag-fr">Français</option>
            <option value="en" className="flag-en">English</option>
        </select>
    );
};

export default LanguageSelector;