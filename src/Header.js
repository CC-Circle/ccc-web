import React, { useState, useEffect } from 'react';
import ReadImage from './ReadImage';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false); // ハンバーガーメニューの表示状態
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const logo_path = "./image/logo.png";
    const renderContent = () => {
        if (windowWidth >= 768) {
            return (
                <div className="">
                    <ul className="float-right list-none mx-0 my-[70px] p-0;">
                        <li className="tracking-[2px] indent-[2px] float-left text-black ml-5 hover:underline hover:translate-y-[-5px] hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out] hover:text-inherit;"><a className="font-[Museno-700] no-underline text-[15px] text-inherit;" href="./">HOME</a></li>
                        <li className="tracking-[2px] indent-[2px] float-left text-black ml-5 hover:underline hover:translate-y-[-5px] hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out] hover:text-inherit;"><a className="font-[Museno-700] no-underline text-[15px] text-inherit;" href="./">ACTIVITES</a></li>
                        <li className="tracking-[2px] indent-[2px] float-left text-black ml-5 hover:underline hover:translate-y-[-5px] hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out] hover:text-inherit;"><a className="font-[Museno-700] no-underline text-[15px] text-inherit;" href="./">NEWS</a></li>
                        <li className="tracking-[2px] indent-[2px] float-left text-black ml-5 hover:underline hover:translate-y-[-5px] hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out] hover:text-inherit;"><a className="font-[Museno-700] no-underline text-[15px] text-inherit;" href="./">JOIN</a></li>
                        <li className="tracking-[2px] indent-[2px] float-left text-black ml-5 hover:underline hover:translate-y-[-5px] hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out] hover:text-inherit;"><a className="font-[Museno-700] no-underline text-[15px] text-inherit;" href="./">CONTACT</a></li>
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="" onClick={toggleMenu}>
                    <ReadImage className="" src="./image/hamburger.svg" />
                </div>
            );
        }
    };

    return (
        <>
            <header className=" h-[150px] bg-white max-w-[1400px] mx-[2em] my-0;">
                <h1 className="float-left mt-[60px] mb-0 mx-0;">
                    <ReadImage className={"h-auto w-[200px] max-w-full;"} src={logo_path} alt="CCCロゴ画像" />
                </h1>

                <div>
                    {renderContent()}
                </div>
            </header>
        </>
    );
}
