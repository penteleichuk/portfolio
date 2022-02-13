import React, {ReactNode} from 'react';
import './Article.scss';

type PaperPropsType = {
    children?: ReactNode
    image: string
    title: string
    link?: string
}

export const Article = ({children, link = '/', ...props}: PaperPropsType) => {
    return (
        <article className="article">
            <div className="article__image">
                <img src={props.image} alt="my work"/>
                <a href={link} rel="noopener noreferrer" target={"_blank"} className="article__button">Смотреть</a>
            </div>

            <h3 className="article__title">{props.title}</h3>
            <p className="article__description">{children}</p>
        </article>
    );
}
