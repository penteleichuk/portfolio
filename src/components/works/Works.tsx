import React from 'react';
import './Works.scss';
import {Article} from "../common/article/Article";
import preBg from "../../assets/images/prebg.jpg";

export const Works = () => {
    return (
        <div className="work" id="work">
            <div className="work__subtitle">Visit my portfolio</div>
            <h2 className="work__title title">
                My Portfolio
            </h2>
            <div className="work__body">
                <Article image={preBg} title={'PROJECT NAME'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</Article>
                <Article image={preBg} title={'PROJECT NAME'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</Article>
                <Article image={preBg} title={'PROJECT NAME'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</Article>
                <Article image={preBg} title={'PROJECT NAME'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</Article>
            </div>
        </div>
    );
}
