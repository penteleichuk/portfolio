import { Link } from 'react-scroll';
import { LanguageType } from '../../App';
import { ContactLang } from '../../langs/contact';
import './Offer.scss';

const LinkAny = Link as any;

export const Offer = ({ language }: { language: LanguageType }) => {
	const Lang = ContactLang[language];

	return (
		<div className='offer'>
			<h5 className='offer__title subtitle'>{Lang.considering.title}</h5>
			<LinkAny to='contact' smooth={true} className='button offer__button'>
				{Lang.considering.button}
			</LinkAny>
		</div>
	);
};
