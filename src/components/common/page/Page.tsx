import React, {ReactNode} from "react";
import './Page.scss';

type PagePropsType = {
    children: ReactNode
    align?: boolean
    heightAuto?: boolean
    id?: string
}

export const Page = ({id = "", children, align = true, heightAuto = false, ...props}: PagePropsType) => {
    return (
        <div className="page__wrapper">
            <div className="container">
                <div id={id}
                     className={`page__screen screen ${heightAuto ? 'page__auto' : ''} ${align ? 'page__align' : ''}`}>
                    {children}
                </div>
            </div>
        </div>
    );
}