import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description }) => {
  const siteTitle = "SOCOOCAMOTRAS | Traceable Cocoa from Cameroon";
  const defaultDescription = "SOCOOCAMOTRAS is a MINADER-registered cocoa marketing cooperative in Cameroon, securing 50,000 t/year of traceable, EUDR-ready cocoa for international buyers.";

  return (
    <Helmet>
      <title>{title ? `${title} | SOCOOCAMOTRAS` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title ? `${title} | SOCOOCAMOTRAS` : siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
    </Helmet>
  );
};

export default SEO;
