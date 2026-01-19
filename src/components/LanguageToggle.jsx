import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';
import './LanguageToggle.css';

const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="language-toggle"
            aria-label="Switch Language"
        >
            <Globe size={18} />
            <span className="lang-code">{language === 'en' ? 'FR' : 'EN'}</span>
        </button>
    );
};

export default LanguageToggle;
