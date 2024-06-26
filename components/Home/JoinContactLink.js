export default function JoinContactLink() {
    return (
        <div className="flex text-center  justify-center mb-[96px]">
            <a href="./join" className="border border-[#000] mr-[5%] w-[30%] h-auto py-[5%] hover:text-[#fff] hover:bg-[#999] hover:border-[#999] hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out]">
                <div className="font-[Museno-900] md:text-[32px] text-[16px]">JOIN</div>
                <div className="font-[Noto-Sans-Regular] md:text-[12px] text-[6px]">ContentsCreationCircleへの参加</div>
            </a>

            <a href="./contact" className="border border-[#000] w-[30%] h-auto py-[5%] hover:text-[#fff] hover:bg-[#999] hover:border-[#999] hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out]">
                <div className="font-[Museno-900] md:text-[32px] text-[16px]">CONTACT</div>
                <div className="font-[Noto-Sans-Regular] md:text-[12px] text-[6px]">問い合わせ</div>
            </a>
        </div>
    );
}