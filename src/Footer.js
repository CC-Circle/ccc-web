import React, { useState, useEffect } from 'react';
import ReadImage from './ReadImage';


export default function Fotter() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const logo_path = "./image/x.svg";
    const ait_path = "https://www.ait.ac.jp/";
    const x_path = "https://twitter.com/CCC_AIT";

    const renderContent = () => {
        if (windowWidth >= 768) {
            return (
                <>
                    <footer className="w-full bg-[#999] h-[180px] mx-auto my-0;">
                        <ul className="float-left w-6/12 list-none ml-8 mr-0 my-0 p-0;">
                            <li className="indent-[2px] text-[#fff] mx-0 my-3;"><a className="font-[Museno-500] no-underline text-xs text-inherit hover:text-black hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out];" href="./">HOME</a></li>
                            <li className="indent-[2px] text-[#fff] mx-0 my-3;"><a className="font-[Museno-500] no-underline text-xs text-inherit hover:text-black hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out];" href="./activities">ACTIVITIES</a></li>
                            <li className="indent-[2px] text-[#fff] mx-0 my-3;"><a className="font-[Museno-500] no-underline text-xs text-inherit hover:text-black hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out];" href="./join">JOIN</a></li>
                            <li className="indent-[2px] text-[#fff] mx-0 my-3;"><a className="font-[Museno-500] no-underline text-xs text-inherit hover:text-black hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out];" href="./contact">CONTACT</a></li>
                        </ul>
                        <div className="float-right ml-0 mr-8 my-2 p-0">
                            <a href={x_path}>
                                <ReadImage className="w-[10%]" src={logo_path} alt="Xのロゴ" />
                            </a>
                            <div className="font-[Museno-500] indent-[2px] text-[#fff] mx-0 my-3 no-underline;"><a className="font-[Museno-500] no-underline text-xs text-inherit hover:text-black hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out];" href={ait_path}>AICHI INSTITUTE OF TECHNOLOGY</a></div>
                        </div>
                    </footer>
                </>
            );
        }else{
            <div></div>
        }
    }
    return (
        
        <div>
        {renderContent()}
        </div>
    );
}