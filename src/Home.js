import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Right from './Right';
import HomeMainVisual from './HomeMainVisual';
import Hr from './Hr';
import HomeAbout from './HomeAbout';
import HomeActivities from './HomeActivities';
import HomeNews from './HomeNews'
import HomeJoinContact from './HomeJoinContact';
import './font.css'

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

