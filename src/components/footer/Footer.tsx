import React from 'react';
import './Footer.scss';
import iconGithub from "../../assets/svg/github.svg";
import iconLinkedin from "../../assets/svg/linkedin.svg";
import iconTelegram from "../../assets/svg/telegram.svg";
import iconWhatsapp from "../../assets/svg/whatsapp.svg";
import iconToUp from "../../assets/svg/to-up.svg";
import {Link} from "react-scroll";
import {LinkModern} from "../common/link-modern/LinkModern";

export const Footer = () => {
    return (
        <footer className="footer">
            {/*<span className="footer__title">Vasya Penteleychuk</span>*/}
            <ul className="footer__list">
                <li className="footer__item">
                    <LinkModern icon={{url: iconGithub, alt: "Github"}} link="https://github.com/vasyok28" />
                </li>
                <li className="footer__item">
                    <LinkModern icon={{url: iconLinkedin, alt: "Linkedin"}} link="https://www.linkedin.com/in/vasyl-penteleychuk-834164214/" />
                </li>
                <li className="footer__item">
                    <LinkModern icon={{url: iconTelegram, alt: "Telegram"}} link="https://t.me/vasyok28" />
                </li>
                <li className="footer__item">
                    <LinkModern icon={{url: iconWhatsapp, alt: "Whatsapp"}} link="https://wa.me/380958301730" />
                </li>
            </ul>
            <span className="footer__rights">© 2022 All rights reserved (Vasya Penteleychuk)</span>
            <Link to="main" smooth={true} className="footer__to-up"><img src={iconToUp} alt="to-up"/></Link>
        </footer>
    );
}
