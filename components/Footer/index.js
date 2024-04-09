import React, { useState, useEffect } from 'react';
// components
import ReadImage from '../ReadImage';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false); // ハンバーガーメニューの表示状態
    const [windowWidth, setWindowWidth] = useState(null); // ウィンドウの幅を初期化


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


    const logo_path = "/image/x.svg";
    const ait_path = "https://www.ait.ac.jp/";
    const x_path = "https://twitter.com/CCC_AIT";

    const renderContent = () => {
        if (typeof window !== 'undefined' && windowWidth >= 768) {
            return (
                <footer className="w-full bg-[#999] h-[180px] mx-auto my-0;">
                    <ul className="float-left w-6/12 list-none ml-8 mr-0 my-0 p-0;">
                        <li className="indent-[2px] text-[#fff] mx-0 my-3;"><a className="font-[Museno-500] no-underline text-xs text-inherit hover:text-black hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out];" href="./">HOME</a></li>
                        <li className="indent-[2px] text-[#fff] mx-0 my-3;"><a className="font-[Museno-500] no-underline text-xs text-inherit hover:text-black hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out];" href="./*">ACTIVITIES</a></li>
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
            );
        } else {
            return null; // ウィンドウの幅が768未満の場合はnullを返す
        }
    }
    return (
        <div>
            {renderContent()}
        </div>
    );
}
