import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import LogisticsTimeline from '../components/LogisticsTimeline';
import truckImage from '../assets/gallery-1.jpg';
import warehouseImg from '../assets/warehouse_storage.jpeg';
import loadingImg from '../assets/loading_sacks.jpeg';
import './Logistics.css';
import { useLanguage } from '../contexts/LanguageContext';

const Logistics = () => {
    const { t } = useLanguage();

    return (
        <>
            <SEO title={t('logistics.title')} description={t('logistics.subtitle')} />

            <PageHero
                title={t('logistics.title')}
                subtitle={t('logistics.subtitle')}
                backgroundImage={truckImage}
            />

            <section className="section">
                <div className="container">
                    <span className="section-subtitle text-center">{t('logistics.supplyChain')}</span>
                    <h2 className="section-title text-center mb-5">{t('logistics.operationalFlow')}</h2>

                    <LogisticsTimeline />

                    <div className="logistics-cards">
                        <div className="logistics-card">
                            <img src={warehouseImg} alt="Cocoa Warehouse" className="logistics-card-image" />
                            <div className="logistics-card-content">
                                <h3>{t('logistics.warehousing')}</h3>
                                <p>{t('logistics.warehousingText')}</p>
                                <ul className="check-list">
                                    <li>{t('logistics.warehouseList1')}</li>
                                    <li>{t('logistics.warehouseList2')}</li>
                                    <li>{t('logistics.warehouseList3')}</li>
                                </ul>
                            </div>
                        </div>

                        <div className="logistics-card">
                            <img src={loadingImg} alt="Cocoa Loading" className="logistics-card-image" />
                            <div className="logistics-card-content">
                                <h3>{t('logistics.exportTerms')}</h3>
                                <p>{t('logistics.exportTermsText')}</p>
                                <ul className="check-list">
                                    <li><strong>Incoterm:</strong> {t('logistics.incoterm').split(':')[1]}</li>
                                    <li><strong>Option:</strong> {t('logistics.option').split(':')[1]}</li>
                                    <li><strong>{t('logistics.leadTime').split(':')[0]}:</strong> {t('logistics.leadTime').split(':')[1]}</li>
                                    <li><strong>{t('logistics.capacity').split(':')[0]}:</strong> {t('logistics.capacity').split(':')[1]}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container text-center">
                    <h2>{t('home.readyToSecure')}</h2>
                    <p>{t('home.contactDesk')}</p>
                    <Link to="/contact" className="btn btn-primary btn-lg">
                        {t('home.ctaButton')}
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Logistics;
