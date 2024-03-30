import React, { useState } from 'react';
import './header.css';
import ReadImage from './ReadImage';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false); // ハンバーガーメニューの表示状態

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const logo_path = "./image/logo.png";

    return (
        <>
            <header className="header">
                <h1 className="header_logo">
                    <ReadImage src={logo_path} alt="CCCロゴ画像" />
                </h1>

                <div className={`mobile-menu ${showMenu ? 'show' : ''}`}>
                    <ul className="menu_nav">
                        <li className="menu_navItem"><a href="./">HOME</a></li>
                        <li className="menu_navItem"><a href="./">ACTIVITES</a></li>
                        <li className="menu_navItem"><a href="./">NEWS</a></li>
                        <li className="menu_navItem"><a href="./">JOIN</a></li>
                        <li className="menu_navItem"><a href="./">CONTACT</a></li>
                    </ul>
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </header>
        </>
    );
}
