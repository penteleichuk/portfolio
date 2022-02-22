import React from 'react';
import {Link} from "react-scroll";
import './Offer.scss';

export const Offer = () => {
    return (
        <div className="offer">
            <h5 className="offer__title subtitle">Considering remote work options</h5>
            <Link to="contact" smooth={true} className="button offer__button">Hire me</Link>
        </div>
    );
}
