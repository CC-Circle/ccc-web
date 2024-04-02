import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Footer from './Footer';
import Right from './Right';
import MainVisual from './MainVisual';
import Hr from './Hr';
import About from './About';
import Activites from './Activites';
import News from './News'
import JoinContact from './JoinContact';
import './font.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <MainVisual />
    <Hr />
    <About />
    <Hr />
    <Activites/>
    <Hr />
    <News/>
    <Hr />
    <JoinContact/>


    <Footer />
    <Right />


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
