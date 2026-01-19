import React from 'react';
import SEO from '../components/SEO';
import { Check } from 'lucide-react';
import './Products.css';
import harvestImg from '../assets/harvest_pile.jpeg';
import { useLanguage } from '../contexts/LanguageContext';

const Products = () => {
    const { t } = useLanguage();

    return (
        <>
            <SEO title={t('products.title')} description={t('products.subtitle')} />

            <div className="products-hero" style={{ backgroundImage: `url(${harvestImg})` }}>
                <div className="hero-overlay">
                    <div className="container text-center">
                        <h1>{t('products.title')}</h1>
                        <p>{t('products.subtitle')}</p>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="product-card">
                        <div className="product-info">
                            <span className="badge">{t('products.grade1')}</span>
                            <h2>{t('products.beans')}</h2>
                            <p className="mb-4">{t('products.grade1Desc')}</p>

                            <div className="specs-grid">
                                <div className="spec-item">
                                    <h4>{t('products.moisture')}</h4>
                                    <p>{t('products.moistureDesc')}</p>
                                </div>
                                <div className="spec-item">
                                    <h4>{t('products.certification')}</h4>
                                    <p>{t('products.certificationDesc')}</p>
                                </div>
                                <div className="spec-item">
                                    <h4>{t('products.packaging')}</h4>
                                    <p>{t('products.packagingDesc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;
