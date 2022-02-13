import React from 'react';
import {Link} from "react-scroll";
import './Offer.scss';

export const Offer = () => {
    return (
        <div className="offer">
            <h5 className="offer__title subtitle">Рассматриваю варианты удаленной работы</h5>
            <Link to="contact" smooth={true} className="button offer__button">Нанять меня</Link>
        </div>
    );
}
