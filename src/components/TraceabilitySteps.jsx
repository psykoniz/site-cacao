import React from 'react';
import { MapPin, Users, FileText, CheckCircle } from 'lucide-react';
import './TraceabilitySteps.css';
import { useLanguage } from '../contexts/LanguageContext';

const TraceabilitySteps = () => {
    const { t } = useLanguage();

    const steps = [
        {
            id: 1,
            title: t('traceability.step1Title'),
            desc: t('traceability.step1Desc'),
            icon: <Users size={24} />
        },
        {
            id: 2,
            title: t('traceability.step2Title'),
            desc: t('traceability.step2Desc'),
            icon: <MapPin size={24} />
        },
        {
            id: 3,
            title: t('traceability.step3Title'),
            desc: t('traceability.step3Desc'),
            icon: <MapPin size={24} />
        },
        {
            id: 4,
            title: t('traceability.step4Title'),
            desc: t('traceability.step4Desc'),
            icon: <FileText size={24} />
        }
    ];

    return (
        <div className="traceability-steps">
            <div className="steps-container">
                {steps.map((step, index) => (
                    <div key={step.id} className="step-item">
                        <div className="step-marker">
                            <div className="step-icon">{step.icon}</div>
                            {index < steps.length - 1 && <div className="step-line"></div>}
                        </div>
                        <div className="step-content">
                            <h4>{step.title}</h4>
                            <p>{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="eudr-badge">
                <CheckCircle size={16} /> {t('traceability.eudrBadge')}
            </div>
        </div>
    );
};

export default TraceabilitySteps;

