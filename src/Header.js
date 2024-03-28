import './header.css';
import ReadImage from './ReadImage';

export default function Header() {
    const logo_path = "./image/logo.png";
    return (
        <>
            <header class="header">
                <h1 class="header_logo">
                    <ReadImage src={logo_path} alt="CCCロゴ画像"/>

                </h1>

                <ul className="menu_nav">
                    <li class="menu_navItem"><a href="">HOME</a></li>
                    <li class="menu_navItem"><a href="">ACTIVITES</a></li>
                    <li class="menu_navItem"><a href="">NEWS</a></li>
                    <li class="menu_navItem"><a href="">JOIN</a></li>
                    <li class="menu_navItem"><a href="">CONTACT</a></li>
                </ul>



            </header>
        </>
    );
}