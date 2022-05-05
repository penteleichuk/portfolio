import { ReactNode } from "react";
import './Page.scss';
import { AnimationBackground } from "../../../components/animation/AnimationBackground";

type PagePropsType = {
    animationBg?: boolean
    children: ReactNode
    align?: boolean
    heightAuto?: boolean
    id?: string
}

export const Wrapper = ({ id = "", children, align = true, heightAuto = false, animationBg = false }: PagePropsType) => {
    return (
        <>
            <div className="page__wrapper">
                {animationBg && <AnimationBackground />}
                <div className="container">
                    <div id={id}
                        className={`page__screen screen ${heightAuto ? 'page__auto' : ''} ${align ? 'page__align' : ''}`}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}