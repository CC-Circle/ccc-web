import FadeInBottom from './FadeInBottom';

export default function HomeAbout() {
    return (
        <div className="mx-[15%] flex items-center">
            <div className="text-center mx-[5%] w-1/5">
                <div className="font-[Museno-900] md:text-[32px] text-[16px]">ABOUT</div>
                <div className="font-['Noto-Sans-Regular'] md:text-[12px] text-[4px]">ContentsCreationCircleについて</div>
            </div>
            <FadeInBottom>
                <p className="font-['Noto-Sans-Regular'] md:text-[12px] text-[6px] w-4/5">
                    ContentsCreationCircleは、愛知工業大学八草キャンパスを拠点として活動している 公認サークルです。<br />
                    2023年10月に創設された新しいサークルです。<br /><br />
                    コンテンツや作品をつくることを目的をとして、それぞれが持ち寄ったアイデアや技術、知識などを活用し 新しいものを生み出していきます。<br /><br />
                    基本的にはチーム開発をすることで進めていき、同じ目標を持った仲間をともにプロジェクトを進めていきます。
                </p>
            </FadeInBottom>
        </div>
    );
}
