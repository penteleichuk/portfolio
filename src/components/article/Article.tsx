import { ReactNode } from 'react';
import LazyLoad from 'react-lazyload';
import { PhotoSkeleton } from '../skeletons/PhotoSkeleton/PhotoSkeleton';
import './Article.scss';

type PaperPropsType = {
    view: string
    children?: ReactNode
    image: string
    title: string
    link?: string
}

export const Article = ({ children, link = '/', ...props }: PaperPropsType) => {
    return (
        <article className="article">
            <div className="article__image">
                <PhotoSkeleton height={281}>
                    <LazyLoad>
                        <img src={props.image} alt={props.title} />
                    </LazyLoad>
                </PhotoSkeleton>
                <a href={link} rel="noopener noreferrer" target={"_blank"} className="article__button">{props.view}</a>
            </div>

            <h3 className="article__title">{props.title}</h3>
            <p className="article__description">{children}</p>
        </article>
    );
}
