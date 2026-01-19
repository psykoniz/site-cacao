import React, { useState } from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';
import { useLanguage } from '../contexts/LanguageContext';
import heroImg from '../assets/community_meeting.jpeg';

const Contact = () => {
    const { t } = useLanguage();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            <SEO title={t('contact.title')} description={t('contact.subtitle')} />

            <PageHero
                title={t('contact.title')}
                subtitle={t('contact.subtitle')}
                backgroundImage={heroImg}
            />

            <section className="section">
                <div className="container">
                    <div className="grid-2-cols gap-xl">
                        <div className="contact-info">
                            <h3>{t('contact.infoTitle')}</h3>
                            <div className="contact-item">
                                <MapPin className="text-gold" />
                                <span>{t('contact.address')}</span>
                            </div>
                            <div className="contact-item">
                                <Mail className="text-gold" />
                                <span>gaetan.farrugia@outlook.com</span>
                            </div>
                            <div className="contact-item">
                                <Phone className="text-gold" />
                                <span>+41 78 906 32 26</span>
                            </div>
                        </div>

                        <div className="contact-form-container">
                            <h3>{t('contact.formTitle')}</h3>
                            {!submitted ? (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>{t('contact.name')}</label>
                                        <input type="text" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label>{t('contact.email')}</label>
                                        <input type="email" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label>{t('contact.subject')}</label>
                                        <input type="text" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label>{t('contact.message')}</label>
                                        <textarea className="form-control" rows="5" required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">{t('contact.send')}</button>
                                </form>
                            ) : (
                                <div className="success-message p-4 bg-light rounded text-center">
                                    <h3 className="text-gold mb-3">{t('contact.successTitle')}</h3>
                                    <p className="mb-4">{t('contact.successMessage')}</p>
                                    <button onClick={() => setSubmitted(false)} className="btn btn-outline-primary btn-sm">{t('contact.sendAnother')}</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
