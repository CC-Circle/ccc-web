import ReadImage from "./ReadImage";
import FadeInBottom from './FadeInBottom';


export default function HomeActivities() {
    const image_path = "./image/6.jpg";
    return (
        <div className="flex flex-col items-center">
            <div className="relative">
                <ReadImage className="" src={image_path} alt="activities" />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
                    <div className="bg-[#fff] m-[10%] p-[5%]">
                        <div className="my-[20px]">
                            <div className="font-[Museno-900] md:text-[32px] text-[16px]">ACTIVITIES</div>
                            <div className="font-[Noto-Sans-Regular] md:text-[12px] text-[4px] text-[#555]">ContentsCreationCircleの活動</div>
                        </div>
                        <FadeInBottom>
                            <div className="font-[Noto-Sans-Regular] md:text-[12px] text-[6px] text-black">
                                ContentsCreationCircleでは、人を楽しませるためや、人に使ってもらうため、人に教えるためなど自分のやりたいことに沿って、コンテンツの制作を行います。<br /><br />
                                制作したコンテンツは、大学祭（工科展）や外部イベントにて出展を行うことで、より開発の楽しさを実感できます。
                            </div>
                        </FadeInBottom>
                        <div className="md:m-[10px] md:mt-10 m-[5px] mt-5">
                            <a className="font-[Noto-Sans-Regular] md:text-[12px] text-[6px] text-[#555] border border-[#555] md:p-[10px] p-[5px] hover:text-[#fff] hover:bg-[#999] hover:border-[#999] hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out]" href="./*">詳細を確認</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
