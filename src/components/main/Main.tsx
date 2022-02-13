import React from 'react';
import myPhoto from './../../assets/images/photo.png'
import iconBento from "./../../assets/images/icons/bento-box-emoji.png";
import iconSwimming from "./../../assets/images/icons/person-swimming.png";
import iconBicycle from "./../../assets/images/icons/bicycle-emoji.png";
import iconMan from "./../../assets/images/icons/man-technologyst.png";
import {LinkNo} from '../common/link-no/LinkNo';
import './Main.scss';

export const Main = () => {
    return (
        <div className="main">
            <div className="main__description">
                <div className="main__message">
                    <p className="main__welcome subtitle">Welcome to my portfolio</p>
                    <h1 className="main__title title">Hi, I’m <span>Vasya Penteleychuk</span></h1>
                    <p className="main__text text">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don't look even slightly.
                    </p>
                </div>
                <div className="main__fanny">
                    <span className="subtitle">Fanny</span>
                    <ul className="main__fanny-list">
                        <li>
                            <LinkNo icon={iconBento}/>
                        </li>
                        <li>
                            <LinkNo icon={iconSwimming}/>
                        </li>
                        <li>
                            <LinkNo icon={iconBicycle}/>
                        </li>
                        <li>
                            <LinkNo icon={iconMan}/>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="main__image">
                <img src={myPhoto} alt="profile"/>
                <div className="main__stack">Frontend developer</div>
            </div>
        </div>
    );
}
