import React, {useState} from "react";
import {Link} from "react-scroll";
import './Header.scss';

export const Header = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onClickBurgerHandler = () => {

        if(collapsed) {
            setCollapsed(false);
            document.body.classList.remove("burger");
        } else {
            setCollapsed(true);
            document.body.classList.add("burger");
        }
    }

    const onClickMobileHandler = () => {
        if(collapsed) {
            setCollapsed(false);
            document.body.classList.remove("burger");
        }
    }

    return (
        <header className="header">

            <div className="container">
                <div className="header__body">
                    <div className="header__lang">
                        <div className="header__lang-item active">Eng</div> / <div className="header__lang-item">Rus</div>
                    </div>
                    {/*<a href="/" className="header__logo">*/}
                    {/*    <img src="" alt="Logo"/>*/}
                    {/*</a>*/}
                    <div onClick={onClickBurgerHandler} className={`header__burger${collapsed ? ' active' : ''}`}>
                        <span> </span>
                    </div>
                    <nav className={`header__menu${collapsed ? ' active' : ''}`}>
                        <ul className="header__list">
                            <li>
                                <Link to="main" onClick={onClickMobileHandler} spy={true} smooth={true} className="header__link" activeClass="header__link_active">About me</Link>
                            </li>
                            <li>
                                <Link to="skill" onClick={onClickMobileHandler} spy={true} smooth={true} className="header__link" activeClass="header__link_active">My Skill</Link>
                            </li>
                            <li>
                                <Link to="work" onClick={onClickMobileHandler} spy={true} smooth={true} className="header__link" activeClass="header__link_active">Projects</Link>
                            </li>
                            <li>
                                <Link to="contact" onClick={onClickMobileHandler} spy={true} smooth={true} className="header__link" activeClass="header__link_active">Contacts</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
