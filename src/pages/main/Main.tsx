import { LinkDisabled } from '../../components/link/LinkDisabled';
import { AboutMeLang } from '../../langs/lang';
import { LanguageType } from '../../App';
import Photo from './../../assets/images/photo.jpg';
import { BentoIcon, BicycleIcon, SwimmingIcon, TechnologystIcon } from '../../utilities/icons';
import './Main.scss';

export const Main = ({ language }: { language: LanguageType }) => {
    const Lang = AboutMeLang[language];

    return (
        <div className="main">
            <div className="main__description">
                <div className="main__message">
                    <p className="main__welcome subtitle">{Lang.title}</p>
                    <h1 className="main__title title">{Lang.im} <span>{Lang.name}</span>
                    </h1>
                    <p className="main__text text">{Lang.description}</p>
                </div>
                <div className="main__fanny">
                    <span className="subtitle">{Lang.mood}</span>
                    <ul className="main__fanny-list">
                        <li>
                            <LinkDisabled icon={BentoIcon} />
                        </li>
                        <li>
                            <LinkDisabled icon={SwimmingIcon} />
                        </li>
                        <li>
                            <LinkDisabled icon={BicycleIcon} />
                        </li>
                        <li>
                            <LinkDisabled icon={TechnologystIcon} />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="main__image">
                <img src={Photo} alt="profile" />
                <div className="main__stack">{Lang.profession}</div>
            </div>
        </div>
    );
}
