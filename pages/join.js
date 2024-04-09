import React from 'react';

// components
import Header from '../components/Header';
import Fotter from '../components/Footer';
import Right from '../components/Right';
import Hr from '../components/Hr';

import JoinMainVisual from '../components/Join/MainVisual';
import JoinAbout from '../components/Join/About';
import JoinMainContents from '../components/Join/MainContents';
import JoinContactLink from '../components/Join/ContactLink';

export default function Join(){
    return (
        <>
        <Header/>
        <JoinMainVisual/>
        <Hr/>
        <JoinAbout/>
        <Hr/>
        <JoinMainContents/>
        <Hr/>
        <JoinContactLink/>


        <Fotter/>
        <Right/>
        </>
    );
}