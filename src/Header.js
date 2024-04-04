import React, { useState, useEffect } from 'react';
import ReadImage from './ReadImage';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false); // ハンバーガーメニューの表示状態
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const toggleMenu = () => {
        setShowMenu(!showMenu); // showMenu ステートをトグルする
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
                        <li className="tracking-[2px] indent-[2px] float-left text-black ml-5 hover:underline hover:translate-y-[-5px] hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out] hover:text-inherit;"><a className="font-[Museno-700] no-underline text-[15px] text-inherit;" href="/">HOME</a></li>
                        {/* <li className="tracking-[2px] indent-[2px] float-left text-black ml-5 hover:underline hover:translate-y-[-5px] hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out] hover:text-inherit;"><a className="font-[Museno-700] no-underline text-[15px] text-inherit;" href="./activities">ACTIVITIES</a></li> */}
                        <li className="tracking-[2px] indent-[2px] float-left text-black ml-5 hover:underline hover:translate-y-[-5px] hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out] hover:text-inherit;"><a className="font-[Museno-700] no-underline text-[15px] text-inherit;" href="/*">ACTIVITIES</a></li>
                        {/* <li className="tracking-[2px] indent-[2px] float-left text-black ml-5 hover:underline hover:translate-y-[-5px] hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out] hover:text-inherit;"><a className="font-[Museno-700] no-underline text-[15px] text-inherit;" href="./news">NEWS</a></li> */}
                        <li className="tracking-[2px] indent-[2px] float-left text-black ml-5 hover:underline hover:translate-y-[-5px] hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out] hover:text-inherit;"><a className="font-[Museno-700] no-underline text-[15px] text-inherit;" href="./join">JOIN</a></li>
                        <li className="tracking-[2px] indent-[2px] float-left text-black ml-5 hover:underline hover:translate-y-[-5px] hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out] hover:text-inherit;"><a className="font-[Museno-700] no-underline text-[15px] text-inherit;" href="./contact">CONTACT</a></li>
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="flex justify-end pt-[15%] h-full" onClick={toggleMenu}>
                    <ReadImage className="" src="./image/hamburger.svg" />
                    {showMenu && (
                        <div className="absolute top-[100%] h-full w-full ">
                            <ul className='bg-white opacity-90 rounded-lg shadow-md'>
                                <li className="py-4 px-8 hover:bg-gray-100 cursor-pointer">
                                    <a href="/">HOME</a>
                                </li>
                                <li className="py-4 px-8 hover:bg-gray-100 cursor-pointer">
                                    <a href="./*">ACTIVITIES</a>
                                </li>
                                <li className="py-4 px-8 hover:bg-gray-100 cursor-pointer">
                                    <a href="./join">JOIN</a>
                                </li>
                                <li className="py-4 px-8 hover:bg-gray-100 cursor-pointer">
                                    <a href="./contact">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            );
        }
    };

    return (
        <>
            <header className=" h-[150px] bg-white max-w-[1400px] mx-[2em] my-0 relative z-50"> {/* relative を追加 */}
                <h1 className="float-left mt-[60px] mb-0 mx-0">
                    <ReadImage className="h-auto w-[200px] max-w-full" src={logo_path} alt="CCCロゴ画像" />
                </h1>

                <div>
                    {renderContent()}
                </div>
            </header>
        </>
    );
}
