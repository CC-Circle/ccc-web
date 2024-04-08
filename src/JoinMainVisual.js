import React from "react";
import ReadImage from './ReadImage';

export default function JoinMainVisual() {
    const image_path = "./image/2.jpg";
    // const image_path = "./image/TOP.svg";
    const text_path = "./image/JOIN.svg";

    return (
        <>
            <div className="flex items-center w-[100%] justify-end">
                <div className="relative w-[1200px] md:ml-[10%]"><ReadImage className="" src={image_path}/></div>
                <div className="absolute left-0 ml-[5%] md:ml-[12%]"><ReadImage className="" src={text_path}/></div>
            </div>
        </>
    );
}
