import React, { useState, useEffect } from 'react';

// style
import styles from './styles.module.css';

// components
import ReadImage from '../ReadImage';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false); // ハンバーガーメニューの表示状態
    const [windowWidth, setWindowWidth] = useState(null); // ウィンドウの幅を初期化

    const toggleMenu = () => {
        setShowMenu(!showMenu); // showMenu ステートをトグルする
    };

    useEffect(() => {
        // ウィンドウの幅を取得する関数
        const getWindowWidth = () => {
            return typeof window !== 'undefined' ? window.innerWidth : null;
        };

        // ウィンドウの幅を初期化
        setWindowWidth(getWindowWidth());

        // ウィンドウのサイズ変更時に handleResize を呼び出す
        const handleResize = () => {
            setWindowWidth(getWindowWidth());
        };

        // ウィンドウのサイズ変更時にリサイズイベントをリッスンする
        window.addEventListener('resize', handleResize);

        // コンポーネントがアンマウントされたらリスナーを削除する
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const logo_path = "/image/logo.png";


    const renderContent = () => {
        if (typeof window !== 'undefined' && windowWidth >= 768) {
            return (
                <div className="">
                    <ul className="float-right list-none mx-0 my-[70px] p-0;">
                        <li className="tracking-[2px] indent-[2px] float-left text-black ml-5 hover:underline hover:translate-y-[-5px] hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out] hover:text-inherit;"><a className="font-[Museno-700] no-underline text-[15px] text-inherit;" href="./">HOME</a></li>
                        <li className="tracking-[2px] indent-[2px] float-left text-black ml-5 hover:underline hover:translate-y-[-5px] hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out] hover:text-inherit;"><a className="font-[Museno-700] no-underline text-[15px] text-inherit;" href="/*">ACTIVITIES</a></li>
                        <li className="tracking-[2px] indent-[2px] float-left text-black ml-5 hover:underline hover:translate-y-[-5px] hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out] hover:text-inherit;"><a className="font-[Museno-700] no-underline text-[15px] text-inherit;" href="./join">JOIN</a></li>
                        <li className="tracking-[2px] indent-[2px] float-left text-black ml-5 hover:underline hover:translate-y-[-5px] hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out] hover:text-inherit;"><a className="font-[Museno-700] no-underline text-[15px] text-inherit;" href="./contact">CONTACT</a></li>
                    </ul>
                </div>
            );
        } else if(windowWidth && windowWidth < 768) {
            return (
                <div className="flex items-center">
                    <div className={`${styles.openbtn} ${showMenu ? styles.active : ''}`} onClick={toggleMenu}>
                        <span></span><span></span><span></span>
                    </div>
                    <nav className={`fixed z-50 top-0 right-0 w-full h-screen bg-[#999] z-999 transition-transform ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
                        <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <li className='text-center'><a href="index" className="text-gray-700 no-underline py-2 px-4 block uppercase tracking-wide font-bold">HOME</a></li>
                            <li className='text-center'><a href="./*" className="text-gray-700 no-underline py-2 px-4 block uppercase tracking-wide font-bold">ACTIVITIES</a></li>
                            <li className='text-center'><a href="./join" className="text-gray-700 no-underline py-2 px-4 block uppercase tracking-wide font-bold">JOIN</a></li>
                            <li className='text-center'><a href="./contact" className="text-gray-700 no-underline py-2 px-4 block uppercase tracking-wide font-bold">CONTACT</a></li>
                        </ul>
                    </nav>
                </div>
            );
        }else{
            return null
        }
    };

    return (
        <>
            <header className=" h-[150px] bg-white max-w-[1400px] mx-[2em] my-0 relative z-50"> {/* relative を追加 */}
                <h1 className="float-left mt-[60px] mb-0 mx-0">
                    <ReadImage className="h-auto w-[200px] max-w-full" src={logo_path} alt="愛知工業大学コンテンツクリエーションサークル" />
                </h1>

                <div>
                    {renderContent()}
                </div>
            </header>
        </>
    );
}
