import ReadImage from "./ReadImage";
import './loader.css'

export default function HoemNews() {
    const image_path = "./image/sonnnamonohanai.jpg";
    return (
        <>


            <div className="text-center">
                <div className="my-[20px]">
                    <div className="font-['Museno-900'] lg:text-[32px] text-[16px]">NEWS</div>
                    <div className="font-['Noto-Sans-Regular'] lg:text-[12px] text-[6px]">ContentsCreationCircleからのおしらせ</div>
                </div>

                <div class="twitter-area">
                <a class="twitter-timeline" data-lang="ja" data-width="800" data-height="800" href="https://twitter.com/CCC_AIT?ref_src=twsrc%5Etfw">
                        <div class="loader"></div>
                    </a>
                    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </div>

                {/* <div className="flex  mx-[calc(50%-310px)]">
                    <div className="relative">
                        <ReadImage className={""} src={image_path} alt="出典:https://seiga.nicovideo.jp/seiga/im4784775" />
                    </div>
                    <div className="absolute translate-y-[440px] text-[#888]">https://seiga.nicovideo.jp/seiga/im4784775</div>
                </div> */}
            </div >
        </>
    );
}