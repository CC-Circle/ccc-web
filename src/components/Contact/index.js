import React from 'react';

// style
import '../../style/font.css'

// components
import Header from "../Header";
import Fotter from "../Footer";
import Right from "../Right";
import ReadImage from '../ReadImage';

export default function Activities() {
    return (
        <>
            <Header />

            <div className="text-center mb-[96px]">
                <div className="my-[20px] mb-[64px]">
                    <div className="font-['Museno-900'] md:text-[96px] text-[48px]">CONTACT</div>
                    <div className="font-['Noto-Sans-Regular'] md:text-[24px] text-[12px] text-[#555]">お問い合わせ</div>
                </div>

                <div className=''>
                    <a className='flex items-center justify-center mb-[64px]' href="https://twitter.com/CCC_AIT">
                        <div >
                            <ReadImage className="mr-15 md:w-[100%] w-[50%]" src="./image/x.svg" />
                        </div>
                        <div className='font-[Noto-Sans-Bold] text-[32px] md:text-[64px]'>＠CCC_AIT</div>
                    </a>

                    <a className='flex items-center justify-center mb-[96px]' href="mailto:ccc.ait.jp@gmail.com">
                        <div >
                            <ReadImage className="mr-15 md:w-[100%] w-[50%]" src="./image/mail.svg" />
                        </div>
                        <div className='font-[Noto-Sans-Bold] text-[20px] md:text-[64px]'>ccc.ait.jp@gmail.com</div>
                    </a>
                </div>

            </div >

            <Fotter />
            <Right />
        </>
    );
}