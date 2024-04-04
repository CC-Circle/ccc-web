import React from 'react';
import './font.css'
import Header from "./Header";
import Fotter from "./Footer";
import Right from "./Right";
import ReadImage from './ReadImage';

export default function Activities() {
    return (
        <>
            <Header />

            <div className="text-center mb-[96px]">
                <div className="my-[20px] mb-[64px]">
                    <div className="font-['Museno-900'] text-[96px]">CONTACT</div>
                    <div className="font-['Noto-Sans-Regular'] text-[24px] text-[#555]">お問い合わせ</div>
                </div>

                <div className='ml-[5%] lg:ml-[10%]'>
                    <a className='flex items-center mb-[64px]' href="https://twitter.com/CCC_AIT">
                        <div >
                            <ReadImage className="mr-10" src="./image/x.svg" />
                        </div>
                        <div className='font-[Noto-Sans-Bold] text-[32px] lg:text-[64px]'>＠CCC_AIT</div>
                    </a>

                    <a className='flex items-center mb-[96px]' href="mailto:ccc.ait.jp@gmail.com">
                        <div >
                            <ReadImage className="mr-10" src="./image/mail.svg" />
                        </div>
                        <div className='font-[Noto-Sans-Bold] text-[32px] lg:text-[64px]'>ccc.ait.jp@gmail.com</div>
                    </a>
                </div>

            </div >

            <Fotter />
            <Right />
        </>
    );
}