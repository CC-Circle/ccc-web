import ReadImage from './ReadImage';
import './right.css'
export default function Right(){
    const logo_path = "./image/logo2.png"
    return (
        <>
        <section class="right">
        <ReadImage src={logo_path} alt="CCCのロゴ"/>
        <div>© 2024 コンテンツクリエーションサークル. All Rights Reserved.</div>
        </section>
        </>
    );
}