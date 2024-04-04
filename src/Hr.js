import ReadImage from './ReadImage';

export default function Hr() {
    const image_path = "./image/logo2.png";
    return (
            <ReadImage className={"lg:w-[100px] w-[50px] lg:my-[96px] my-[48px] lg:mx-[calc(50%-50px)] mx-[calc(50%-25px)]"} src={image_path} alt="hr"/>
    );
}
