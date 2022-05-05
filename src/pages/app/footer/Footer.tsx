
import { Link } from "react-scroll";
import { LanguageType } from "../../../App";
import { LinkModern } from "../../../components/link/LinkModern";
import { SocialsData } from "../../../data/socials";
import { AboutMeLang } from "../../../langs/lang";
import { ToUpIcon } from "../../../utilities/icons";
import './Footer.scss';

export const Footer = ({ language }: { language: LanguageType }) => {
    const Lang = AboutMeLang[language];
    const Data = SocialsData;

    return (
        <footer className="footer">
            <ul className="footer__list">
                {Data.map((el, key) => {
                    return <li key={key} className="footer__item">
                        <LinkModern icon={{ url: el.icon, alt: el.title }} link={el.link} />
                    </li>
                })}
            </ul>
            <span className="footer__rights">© 2022 {Lang.reserved} ({Lang.name})</span>
            <Link to="main" smooth={true} className="footer__to-up"><img src={ToUpIcon} alt="to-up" /></Link>
        </footer>
    );
}
