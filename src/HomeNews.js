import ReadImage from "./ReadImage";

export default function HoemNews() {
    const image_path = "./image/sonnnamonohanai.jpg";
    return (
        <>
            <div className="text-center">
                <div className="my-[20px]">
                    <div className="font-['Museno-900'] text-[32px]">NEWS</div>
                    <div className="font-['Noto-Sans-Regular'] text-[12px]">ContentsCreationCircleからのおしらせ</div>
                </div>
                <div className="flex  mx-[calc(50%-310px)]">
                    <div className="relative">
                        <ReadImage className={""} src={image_path} alt="出典:https://seiga.nicovideo.jp/seiga/im4784775" />
                    </div>
                    <div className="absolute translate-y-[440px] text-[#888]">https://seiga.nicovideo.jp/seiga/im4784775</div>
                </div>
            </div >
        </>
    );
}