import ReadImage from './ReadImage';

export default function Hr() {
    const image_path = "./image/logo2.png";
    return (
        <div className='md:w-[100px] w-[50px] md:my-[96px] my-[48px] md:mx-[calc(50%-50px)] mx-[calc(50%-25px)]'>
            {/* <ReadImage className={"md:w-[100px] w-[50px] md:my-[96px] my-[48px] md:mx-[calc(50%-50px)] mx-[calc(50%-25px)]"} src={image_path} alt="hr"/> */}
        </div>
    );
}
