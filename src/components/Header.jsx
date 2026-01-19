import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import './Header.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);


    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <Link to="/" className="logo-link" onClick={() => setIsMobileMenuOpen(false)}>
                    <span className="logo-text">SOCOOCAMOTRAS <span className="text-gold">Cocoa</span></span>
                </Link>

                <div className="desktop-actions">
                    <nav className="desktop-nav">
                        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>{t('nav.home')}</Link>
                        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>{t('nav.about')}</Link>
                        <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>{t('nav.products')}</Link>
                        <Link to="/traceability" className={location.pathname === '/traceability' ? 'active' : ''}>{t('nav.traceability')}</Link>
                        <Link to="/logistics" className={location.pathname === '/logistics' ? 'active' : ''}>{t('nav.logistics')}</Link>
                    </nav>
                    <LanguageToggle />
                    <Link to="/contact" className="btn btn-primary">{t('nav.contact')}</Link>
                </div>

                <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X color="var(--color-cocoa)" /> : <Menu color="var(--color-cocoa)" />}
                </button>

                {/* Mobile Nav */}
                <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.home')}</Link>
                    <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.about')}</Link>
                    <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.products')}</Link>
                    <Link to="/traceability" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.traceability')}</Link>
                    <Link to="/logistics" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.logistics')}</Link>
                    <div className="mobile-nav-actions">
                        <LanguageToggle />
                        <Link to="/contact" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.contact')}</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
