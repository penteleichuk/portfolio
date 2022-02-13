import React from 'react';
import './Skills.scss';
import {Paper} from "../common/paper/Paper";
import svgReact from "./../../assets/svg/react.svg";
import svgRedux from "./../../assets/svg/redux.svg";
import svgTS from "./../../assets/svg/ts.svg";
import svgJS from "./../../assets/svg/js.svg";

export const Skills = () => {
    return (
        <div className="skill">
            <h2 className="skill__title title">
                My skills
            </h2>
            <div className="skill__body">
                <Paper title={'React'} icon={svgReact} >of letters, as opposed to using 'Content here, content here', making it look like readable English.</Paper>
                <Paper title={'Redux'} icon={svgRedux} >packages and web page editors now use Lorem Ipsum as their default model text, and a</Paper>
                <Paper title={'TS'} icon={svgTS} >at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</Paper>
                <Paper title={'JS'} icon={svgJS} >during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes</Paper>
            </div>
        </div>
    );
}
