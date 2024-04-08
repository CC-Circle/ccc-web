// framework
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";

// utils
import reportWebVitals from './utils/reportWebVitals';

// style
import './style/index.css';
import './style/font.css'

// components
import Home from './components/Home'
import Activities from './components/Activities';
import News from './components/News';
import Join from './components/Join';
import Contact from './components/Contact';
import NotFound from './components/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/activities" element={<Activities/>} />
{/* <Route path="/news" element={<News/>} /> */}
<Route path="/join" element={<Join/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/*" element={<NotFound/>} />
</Routes>
</Router>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
