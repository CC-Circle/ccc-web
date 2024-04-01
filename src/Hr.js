import ReadImage from './ReadImage';

export default function Hr() {
    const image_path = "./image/logo2.png";
    const image_style = {
        margin: '60px 0',
    };
    return (
        <div  style={{textAlign:'center'}}>
            <ReadImage src={image_path} alt="hr" style={image_style} />
        </div>
    );
}