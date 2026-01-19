import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <Link to="/" className="footer-logo">
                        SOCOOCAMOTRAS <span>COCOA</span>
                    </Link>
                    <p className="footer-desc">
                        {t('footer.desc')}
                    </p>
                </div>

                <div className="footer-col">
                    <h4>{t('footer.nav')}</h4>
                    <ul className="footer-links">
                        <li><Link to="/">{t('nav.home')}</Link></li>
                        <li><Link to="/about">{t('nav.about')}</Link></li>
                        <li><Link to="/products">{t('nav.products')}</Link></li>
                        <li><Link to="/traceability">{t('nav.traceability')}</Link></li>
                        <li><Link to="/logistics">{t('nav.logistics')}</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>{t('footer.legal')}</h4>
                    <ul className="footer-links">
                        <li><span className="compliance-tag">{t('compliance.minader')}</span></li>
                        <li><span className="compliance-tag">{t('compliance.eudr')}</span></li>
                        <li><Link to="/legal">Legal Mentions</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>{t('footer.contact')}</h4>
                    <address>
                        {t('contact.address')}<br />
                        <a href="mailto:trade@bmecocoa.com">trade@bmecocoa.com</a><br />
                        <a href="tel:+237600000000">+237 6 00 00 00 00</a>
                    </address>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {currentYear} SOCOOCAMOTRAS. {t('footer.rights')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
