import loader from './loader.module.css';

export default function News() {
    const image_path = "./image/sonnnamonohanai.jpg";
    return (
        <div className="text-center">
            <div className="my-10">
                <div className="font-['Museno-900'] text-[16px] md:text-[32px]">NEWS</div>
                <div className="font-['Noto-Sans-Regular'] text-[6px] md:text-[12px]">ContentsCreationCircleからのお知らせ</div>
            </div>

            <div className="mx-auto max-w-[70%]"> {/* 中央配置と画面幅に応じた幅の制御 */}
                <a className="twitter-timeline" data-lang="ja" data-width="100%" data-height="800" href="https://twitter.com/CCC_AIT?ref_src=twsrc%5Etfw">
                    <div className={loader.loader}></div>
                </a>
            </div>
            
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
    );
}
