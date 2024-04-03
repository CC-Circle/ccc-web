import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Right from './Right';
import Home_MainVisual from './Home_MainVisual';
import Hr from './Hr';
import Home_About from './Home_About';
import Home_Activities from './Home_Activities';
import Home_News from './Home_News'
import Home_JoinContact from './Home_JoinContact';
import './font.css'

export default function Home() {
    return (
        <React.StrictMode>
            <Header />
            <Home_MainVisual />
            <Hr />
            <Home_About />
            <Hr />
            <Home_Activities />
            <Hr />
            <Home_News />
            <Hr />
            <Home_JoinContact />
            <Footer />
            <Right />
        </React.StrictMode>
    );
}

