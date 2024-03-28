import './footer.css'
import ReadImage from './ReadImage';


export default function Fotter() {
    const logo_path = "./image/x.png";
    const ait_path = "https://www.ait.ac.jp/";
    const x_path = "https://twitter.com/CCC_AIT";

    return (
        <>
        <footer class="footer">
            <ul className="menu_nav">
                <li class="menu_navItem"><a href="">HOME</a></li>
                <li class="menu_navItem"><a href="">ACTIVITES</a></li>
                <li class="menu_navItem"><a href="">NEWS</a></li>
                <li class="menu_navItem"><a href="">JOIN</a></li>
                <li class="menu_navItem"><a href="">CONTACT</a></li>
            </ul>
            <div class="links">
                <h3 class="x_logo"><a href={x_path}><ReadImage src={logo_path} alt="Xのロゴ" /></a></h3>
                <div class="ait_link"><a href={ait_path}>AICHI INSTITUTE OF TECHNOLOGY</a></div>
            </div>
        </footer>
        </>

    );
}