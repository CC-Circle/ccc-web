import ReadImage from "./ReadImage";

export default function Activites() {
    const image_path = "./image/activites.png";
    return (
        <div className="flex flex-col items-center">
            <div className="relative">
                <ReadImage className="" src={image_path} alt="activites" />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
                    <div className="bg-[#fff] m-[10%] p-[5%]">
                        <div className="my-[20px]">
                            <div className="font-[Museno-900] text-[32px]">ACTIVITES</div>
                            <div className="font-[Noto-Sans-Regular] text-[12px] text-[#555]">ContentsCreationCircleの活動</div>
                        </div>
                        <div className="font-[Noto-Sans-Regular] text-[12px] text-black">
                            ContentsCreationCircleでは、人を楽しませるためや、人に使ってもらうため、人に教えるためなど自分のやりたいことに沿って、コンテンツの制作を行います。<br/><br/> 
                            制作したコンテンツは、大学祭（工科展）や外部イベントにて出展を行うことで、より開発の楽しさを実感できます。
                        </div>
                        <div className="m-[10px] mt-10">
                            <a className="font-[Noto-Sans-Regular] text-[12px] text-[#555] border border-[#555] p-[10px] hover:text-[#fff] hover:bg-[#999] hover:border-[#999] hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out]" href="./">詳細を確認</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
