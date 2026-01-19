import React from 'react';
import './PageHero.css';

const PageHero = ({ title, subtitle, backgroundImage }) => {
    const style = backgroundImage
        ? { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${backgroundImage})` }
        : {};

    return (
        <div className={`page-hero ${backgroundImage ? 'page-hero-image' : 'page-hero-solid'}`} style={style}>
            <div className="container text-center">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    );
};

export default PageHero;
