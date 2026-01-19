import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import heroBg from '../assets/gallery-1.jpg';

import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <span className="hero-badge">{t('home.heroBadge')}</span>
                <h1>{t('home.heroTitle')}</h1>
                <p className="hero-sub">
                    {t('home.heroSubtitle')}
                </p>
                <div className="hero-actions">
                    <Link to="/contact" className="btn btn-primary">{t('home.ctaButton')}</Link>
                    <Link to="/products" className="btn btn-outline-light">{t('home.viewProducts')}</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
