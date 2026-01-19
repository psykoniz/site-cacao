import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ComplianceStrip from '../components/ComplianceStrip';
import KeyFigures from '../components/KeyFigures';
import TraceabilitySteps from '../components/TraceabilitySteps';
import LogisticsTimeline from '../components/LogisticsTimeline';

import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
    const { t } = useLanguage();

    return (
        <>
            <SEO />
            <Hero />
            <ComplianceStrip />

            <KeyFigures />

            <section className="section bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="section-subtitle">{t('home.whyPartner')}</span>
                        <h2 className="section-title">{t('home.endToEnd')}</h2>
                        <p className="section-desc">
                            {t('home.control')}
                        </p>
                    </div>

                    <div className="grid-2-cols">
                        <div className="feature-block">
                            <h3>{t('home.secureTraceability')}</h3>
                            <p className="mb-4">{t('home.secureTraceabilityDesc')}</p>
                            <TraceabilitySteps />
                            <div className="mt-4 text-center">
                                <Link to="/traceability" className="btn-link">{t('home.viewTraceability')} <ArrowRight size={16} /></Link>
                            </div>
                        </div>

                        <div className="feature-block">
                            <h3>{t('home.reliableLogistics')}</h3>
                            <p className="mb-4">{t('home.reliableLogisticsDesc')}</p>
                            <LogisticsTimeline />
                            <div className="mt-4 text-center">
                                <Link to="/logistics" className="btn-link">{t('home.viewLogistics')} <ArrowRight size={16} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section cta-section bg-cocoa text-white">
                <div className="container text-center">
                    <h2>{t('home.readyToSecure')}</h2>
                    <p className="mb-4 op-80">
                        {t('home.contactDesk')}
                    </p>
                    <div className="cta-buttons">
                        <Link to="/contact" className="btn btn-primary">{t('home.ctaButton')}</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
