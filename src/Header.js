import './header.css';

export default function ForHeader() {
    const logo = `./img/logo.png`

    return (
        <>
            <header class="header">
                <h1 class="header_logo">
                    <img src={logo} alt="CCCロゴ" />
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