import React from 'react';
import './font.css';
import Header from "./Header";
import Fotter from "./Footer";
import Right from "./Right";
import Hr from "./Hr";
import JoinMainVisual from './JoinMainVisual';
import JoinAbout from './JoinAbout';
import JoinMainContents from './JoinMainContents';
import JoinContactLink from './JoinContactLink';

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