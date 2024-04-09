import React from 'react';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Right from '../components/Right';
import Hr from '../components/Hr';

import MainVisual from '../components/Home/MainVisual';
import About from '../components/Home/About';
import Activities from '../components/Home/Activities';
import News from '../components/Home/News'
import JoinContactLink from '../components/Home/JoinContactLink';

export default function HomePage() {
    return (
        <React.StrictMode>
            <Header />
            <MainVisual />
            <Hr />
            <About />
            <Hr />
            <Activities />
            <Hr />
            <News />
            <Hr />
            <JoinContactLink />
            <Footer />
            <Right />
        </React.StrictMode>
    );
}

