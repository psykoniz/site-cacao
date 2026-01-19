import React from 'react';
import { ShieldCheck, FileCheck, CheckCircle, Globe } from 'lucide-react';
import './ComplianceStrip.css';

import { useLanguage } from '../contexts/LanguageContext';

const ComplianceStrip = () => {
    const { t } = useLanguage();

    const items = [
        { icon: <ShieldCheck size={20} />, text: t('compliance.minader'), sub: t('compliance.minaderDesc') },
        { icon: <FileCheck size={20} />, text: t('compliance.oncc'), sub: t('compliance.onccDesc') },
        { icon: <CheckCircle size={20} />, text: t('compliance.sgs'), sub: t('compliance.sgsDesc') },
        { icon: <Globe size={20} />, text: t('compliance.eudr'), sub: t('compliance.eudrDesc') },
    ];

    return (
        <div className="compliance-strip">
            <div className="container compliance-container">
                {items.map((item, index) => (
                    <div key={index} className="compliance-item">
                        <div className="compliance-icon">{item.icon}</div>
                        <div className="compliance-text">
                            <span className="compliance-title">{item.text}</span>
                            <span className="compliance-sub">{item.sub}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComplianceStrip;
