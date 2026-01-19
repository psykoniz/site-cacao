import React from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import fermentationImg from '../assets/logistics_warehouse_new.jpeg';
import dryingImg from '../assets/logistics_loading_new.jpeg';
import heroImg from '../assets/gallery-1.jpg';
import './Traceability.css';
import TraceabilitySteps from '../components/TraceabilitySteps';
import { Map, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Traceability = () => {
    const { t } = useLanguage();

    return (
        <>
            <SEO title={t('traceability.title')} description={t('traceability.subtitle')} />

            <PageHero
                title={t('traceability.title')}
                subtitle={t('traceability.subtitle')}
                backgroundImage={heroImg}
            />

            <section className="section">
                <div className="container">
                    <div className="grid-2-cols gap-xl">
                        <div>
                            <span className="section-subtitle">{t('traceability.ourProcess')}</span>
                            <h2 className="mb-4">{t('traceability.processTitle')}</h2>
                            <p className="mb-4 text-muted">
                                {t('traceability.processText')}
                            </p>
                            <TraceabilitySteps />
                        </div>

                        <div className="info-box bg-light-brown">
                            <Shield size={40} className="text-gold mb-3" />
                            <h3 className="mb-3">{t('traceability.eudrTitle')}</h3>
                            <p className="mb-3">
                                {t('traceability.eudrText')}
                            </p>
                            <ul className="check-list">
                                <li>{t('traceability.eudrItem1')}</li>
                                <li>{t('traceability.eudrItem2')}</li>
                                <li>{t('traceability.eudrItem3')}</li>
                                <li>{t('traceability.eudrItem4')}</li>
                            </ul>
                            <div className="mt-4 p-3 bg-white border-gold rounded">
                                <strong>{t('traceability.docAvailable')}</strong> <br />
                                {t('traceability.docAvailableText')}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container">
                    <h2 className="text-center mb-5">{t('traceability.qualityTitle')}</h2>
                    <div className="quality-grid">
                        <div className="quality-item">
                            <div className="quality-image-container-clean">
                                <img
                                    src={fermentationImg}
                                    alt="Cocoa Fermentation"
                                    className="quality-image-clean"
                                    style={{ objectPosition: '20% 25%' }}
                                />
                            </div>
                            <div>
                                <h3>{t('traceability.fermentation')}</h3>
                                <p>{t('traceability.fermentationDesc')}</p>
                            </div>
                        </div>
                        <div className="quality-item">
                            <div className="quality-image-container-clean">
                                <img src={dryingImg} alt="Sun Drying" className="quality-image-clean" />
                            </div>
                            <div>
                                <h3>{t('traceability.drying')}</h3>
                                <p>{t('traceability.dryingDesc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container text-center">
                    <h2>{t('traceability.productionBasins')}</h2>
                    <p className="max-w-600 mx-auto mb-5">
                        {t('traceability.productionBasinsDesc')}
                    </p>

                    <div className="grid-3-cols">
                        <div className="card">
                            <Map className="card-icon" />
                            <h3>{t('traceability.centreRegion')}</h3>
                            <p>{t('traceability.centreRegionCities')}</p>
                            <span className="badge-outline">{t('traceability.highVolume')}</span>
                        </div>
                        <div className="card">
                            <Map className="card-icon" />
                            <h3>{t('traceability.southRegion')}</h3>
                            <p>{t('traceability.southRegionCities')}</p>
                            <span className="badge-outline">{t('traceability.premiumQuality')}</span>
                        </div>
                        <div className="card">
                            <Map className="card-icon" />
                            <h3>{t('traceability.eastRegion')}</h3>
                            <p>{t('traceability.eastRegionCities')}</p>
                            <span className="badge-outline">{t('traceability.emergingZone')}</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Traceability;
