import React from 'react';
import { Users, Scale, Package, Anchor } from 'lucide-react';
import './KeyFigures.css';

import { useLanguage } from '../contexts/LanguageContext';

const KeyFigures = () => {
    const { t } = useLanguage();

    const figures = [
        {
            id: 1,
            value: '25,000+',
            label: t('keyFigures.producers'),
            icon: <Users size={28} />,
            desc: t('keyFigures.producersDesc')
        },
        {
            id: 2,
            value: '50,000',
            label: t('keyFigures.tonnes'),
            icon: <Scale size={28} />,
            desc: t('keyFigures.tonnesDesc')
        },
        {
            id: 3,
            value: '250 - 1,000t',
            label: t('keyFigures.lotSizes'),
            icon: <Package size={28} />,
            desc: t('keyFigures.lotSizesDesc')
        },
        {
            id: 4,
            value: 'FOB Douala',
            label: t('keyFigures.exportTerms'),
            icon: <Anchor size={28} />,
            desc: t('keyFigures.exportTermsDesc')
        }
    ];

    return (
        <section className="section key-figures-section">
            <div className="container">
                <div className="figures-grid">
                    {figures.map((fig) => (
                        <div key={fig.id} className="figure-card">
                            <div className="figure-icon">{fig.icon}</div>
                            <div className="figure-content">
                                <h3 className="figure-value">{fig.value}</h3>
                                <span className="figure-label">{fig.label}</span>
                                <p className="figure-desc">{fig.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyFigures;
