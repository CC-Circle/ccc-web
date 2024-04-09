import React from 'react';

// components
import Header from '../components/Header';
import Fotter from '../components/Footer';
import Right from '../components/Right';
import Contact from '../components/Contact';

export default function contactPage() {
    return (
        <>
            <Header />
            <Contact/>
            <Fotter />
            <Right />
        </>
    );
}