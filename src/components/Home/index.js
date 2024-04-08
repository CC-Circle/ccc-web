import React from 'react';

// components
import Header from '../Header';
import Footer from '../Footer';
import Right from '../Right';
import Hr from '../Hr';

import HomeMainVisual from './MainVisual';
import HomeAbout from './About';
import HomeActivities from './Activities';
import HomeNews from './News'
import HomeJoinContact from './JoinContactLink';

export default function Home() {
    return (
        <React.StrictMode>
            <Header />
            <HomeMainVisual />
            <Hr />
            <HomeAbout />
            <Hr />
            <HomeActivities />
            <Hr />
            <HomeNews />
            <Hr />
            <HomeJoinContact />
            <Footer />
            <Right />
        </React.StrictMode>
    );
}

