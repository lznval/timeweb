/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

const Header = (navigationList: any) => {
    
    return (
        <header className="header">
            <div className="header__logo">
                <div className="header__logo-icon">
                    <img src="/logo.svg" alt="Logo" />
                </div>
                <div className="header__logo-title"><Link href="/">Company</Link></div>
            </div>
            <nav className="header__menu">
                <ul className="header__menu-list">
                    {navigationList && navigationList.navigationList.navigation.map((item: any, key: any) => (
                        <li key={key} className="header__menu-item"><Link href={item.link}><a>{item.title}</a></Link></li>
                    ))}
                </ul>
            </nav>
            <div className="header__social">
                <ul className="header__social-list">
                    <li className="header__social-item">
                        <Link href="#">
                            <a><img src="/facebook.svg" alt="Facebook" /></a>
                        </Link>
                    </li>
                    <li className="header__social-item">
                        <Link href="#">
                            <a><img src="/twitter.svg" alt="Twitter" /></a>
                        </Link>
                    </li>
                    <li className="header__social-item">
                        <Link href="#">
                            <a><img src="/linkedin.svg" alt="Linkedin" /></a>
                        </Link>
                    </li>
                    <li className="header__social-item">
                        <Link href="#">
                            <a><img src="/youtube.svg" alt="Youtube" /></a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="header__search">
                <img src="/search.svg" alt="" />
            </div>
        </header>
    )
}

export default Header