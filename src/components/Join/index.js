import React from 'react';

// style
import '../../style/font.css';

// components
import Header from "../Header";
import Fotter from "../Footer";
import Right from "../Right";
import Hr from "../Hr";

import JoinMainVisual from './MainVisual';
import JoinAbout from './About';
import JoinMainContents from './MainContents';
import JoinContactLink from './ContactLink';

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