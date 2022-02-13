import React, {ReactNode} from 'react';
import './Paper.scss';

type PaperPropsType = {
    children?: ReactNode
    icon?: string
    title: string
}

export const Paper = ({children, ...props}: PaperPropsType) => {
    return (
        <section className="paper">
            <img src={props.icon} alt="my skill" className="paper__icon"/>
            <h3 className="paper__title">{props.title}</h3>
            <p className="paper__description">{children}</p>
        </section>
    );
}
