import React from 'react';
import { Truck, Warehouse, Ship, Anchor } from 'lucide-react';
import './LogisticsTimeline.css';
import { useLanguage } from '../contexts/LanguageContext';

const LogisticsTimeline = () => {
    const { t } = useLanguage();

    const steps = [
        { text: t('logistics.timelineStep1'), icon: <Truck size={20} /> },
        { text: t('logistics.timelineStep2'), icon: <Warehouse size={20} /> },
        { text: t('logistics.timelineStep3'), icon: <Ship size={20} /> },
        { text: t('logistics.timelineStep4'), icon: <Anchor size={20} /> },
    ];

    return (
        <div className="logistics-component">
            <div className="logistics-timeline">
                {steps.map((step, index) => (
                    <div key={index} className="log-step">
                        <div className="log-circle">{step.icon}</div>
                        <span className="log-text">{step.text}</span>
                        {index < steps.length - 1 && <div className="log-connector"></div>}
                    </div>
                ))}
            </div>
            <div className="logistics-info">
                <p><strong>{t('logistics.timelineLeadTime')}:</strong> {t('logistics.timelineLeadTimeValue')}</p>
                <p><strong>{t('logistics.timelineIncoterm')}:</strong> {t('logistics.timelineIncotermValue')}</p>
            </div>
        </div>
    );
};

export default LogisticsTimeline;

