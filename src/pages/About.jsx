import React from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import farmerImg from '../assets/community_meeting.jpeg';
import './About.css';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <>
            <SEO title={t('about.title')} description={t('about.subtitle')} />

            <PageHero
                title={t('about.title')}
                subtitle={t('about.subtitle')}
                backgroundImage={farmerImg}
            />

            <section className="section">
                <div className="container">
                    <div className="grid-2-cols gap-xl items-center">
                        <div>
                            <span className="section-subtitle">{t('about.whoWeAre')}</span>
                            <h2 className="mb-4">{t('about.unionTitle')}</h2>
                            <p className="mb-4 text-muted">
                                {t('about.unionText')}
                            </p>
                            <p className="text-muted">
                                {t('about.producerStats')}
                            </p>
                        </div>
                        <div className="bg-light p-5 rounded">
                            <h3 className="mb-4 text-center">{t('about.missionTitle')}</h3>
                            <ul className="check-list">
                                <li><strong>{t('about.missionItems.securing').split(':')[0]}:</strong> {t('about.missionItems.securing').split(':')[1]}</li>
                                <li><strong>{t('about.missionItems.quality').split(':')[0]}:</strong> {t('about.missionItems.quality').split(':')[1]}</li>
                                <li><strong>{t('about.missionItems.revenue').split(':')[0]}:</strong> {t('about.missionItems.revenue').split(':')[1]}</li>
                                <li><strong>{t('about.missionItems.compliance').split(':')[0]}:</strong> {t('about.missionItems.compliance').split(':')[1]}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light-brown">
                <div className="container text-center">
                    <h2 className="mb-5">{t('about.governanceTitle')}</h2>
                    <div className="grid-3-cols">
                        <div className="card">
                            <h3>{t('about.generalAssembly')}</h3>
                            <p className="text-muted">{t('about.generalAssemblyDesc')}</p>
                        </div>
                        <div className="card">
                            <h3>{t('about.executiveBoard')}</h3>
                            <p className="text-muted">{t('about.executiveBoardDesc')}</p>
                        </div>
                        <div className="card">
                            <h3>{t('about.technicalTeam')}</h3>
                            <p className="text-muted">{t('about.technicalTeamDesc')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
