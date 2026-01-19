import React, { useEffect } from 'react';

const SEO = ({ title, description }) => {
    const siteTitle = "SOCOOCAMOTRAS | Traceable Cocoa from Cameroon";
    const defaultDescription = "SOCOOCAMOTRAS is a MINADER-registered cocoa marketing cooperative in Cameroon, securing 50,000 t/year of traceable, EUDR-ready cocoa for international buyers.";

    useEffect(() => {
        // Update document title
        document.title = title ? `${title} | SOCOOCAMOTRAS` : siteTitle;

        // Update meta description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = 'description';
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = description || defaultDescription;

        // Update OG tags
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
            ogTitle = document.createElement('meta');
            ogTitle.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitle);
        }
        ogTitle.content = title ? `${title} | SOCOOCAMOTRAS` : siteTitle;

        let ogDesc = document.querySelector('meta[property="og:description"]');
        if (!ogDesc) {
            ogDesc = document.createElement('meta');
            ogDesc.setAttribute('property', 'og:description');
            document.head.appendChild(ogDesc);
        }
        ogDesc.content = description || defaultDescription;
    }, [title, description]);

    return null;
};

export default SEO;
