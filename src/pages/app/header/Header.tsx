import { useState } from "react";
import { Link } from "react-scroll";
import { LanguageType } from "../../../App";
import { HeaderMenuLang } from "../../../langs/lang";
import './Header.scss';

export type HeaderPropsType = {
    setLanguage: (value: LanguageType) => void
    language: LanguageType
}

export const Header = ({ setLanguage, language }: HeaderPropsType) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const Lang = HeaderMenuLang[language];

    const onClickBurgerHandler = () => {

        if (collapsed) {
            setCollapsed(false);
            document.body.classList.remove("burger");
        } else {
            setCollapsed(true);
            document.body.classList.add("burger");
        }
    }

    const onClickMobileHandler = () => {
        if (collapsed) {
            setCollapsed(false);
            document.body.classList.remove("burger");
        }
    }

    return (
        <header className="header">

            <div className="container">
                <div className="header__body">
                    <div className="header__lang">
                        <div className={`header__lang-item ${language === 'en' ? 'active' : ''}`} onClick={() => setLanguage('en')}>Eng</div> /
                        <div className={`header__lang-item ${language === 'ru' ? 'active' : ''}`} onClick={() => setLanguage('ru')}>Rus</div>
                    </div>
                    <div onClick={onClickBurgerHandler} className={`header__burger${collapsed ? ' active' : ''}`}>
                        <span> </span>
                    </div>
                    <nav className={`header__menu${collapsed ? ' active' : ''}`}>
                        <ul className="header__list">
                            {Object.entries(Lang).map((el) => {
                                return <li key={el[0]}>
                                    <Link to={el[0]} onClick={onClickMobileHandler} spy={true} smooth={true} className="header__link" activeClass="header__link_active">{el[1]}</Link>
                                </li>
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
