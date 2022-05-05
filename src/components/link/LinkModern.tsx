import React, {ReactNode} from "react";

type LinkModernPropsType = {
    children?: ReactNode
    link?: string
    icon?: {
        alt?: string
        url?: string
    }
}

export const LinkModern = ({children, link, icon}: LinkModernPropsType) => {
    return (
        <>
            <a href={link} rel="noopener noreferrer" target={"_blank"} className={`button link-modern`}>
                {icon ? <img src={icon.url} alt={icon.alt}/> : children}
            </a>
        </>
    );
}