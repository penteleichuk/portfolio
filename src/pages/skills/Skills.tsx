import { Paper } from "../../components/paper/Paper";
import { LanguageType } from "../../App";
import { MySkillData } from "../../data/my-skill";
import { MySkillLang } from "../../langs/lang";
import './Skills.scss';
import { Fade } from "react-awesome-reveal";

export const Skills = ({ language }: { language: LanguageType }) => {
    const Lang = MySkillLang[language];

    return (
        <div className="skill">
            <h2 className="skill__title title">{Lang.title}</h2>
            <div className="skill__body">
                <Fade cascade duration={300} triggerOnce={true} direction={'right'}>
                    {MySkillData.map((el, key) => {
                        return <Paper key={key} title={el.title} icon={el.image} />
                    })}
                </Fade>
            </div>
        </div>
    );
}
