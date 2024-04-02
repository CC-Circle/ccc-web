import ReadImage from './ReadImage';

export default function Hr() {
    const image_path = "./image/logo2.png";
    return (
            <ReadImage className={"my-[96px] mx-[calc(50%-50px)]"} src={image_path} alt="hr"/>
    );
}
