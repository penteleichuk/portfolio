import { LanguageType } from '../../App';
import { ContactLang } from '../../langs/contact';
import './Contacts.scss';

export const Contacts = ({ language }: { language: LanguageType }) => {
    const Lang = ContactLang[language];

    return (
        <div className="contacts">
            <h5 className="contacts__title title">{Lang.form.title}</h5>
            <div className="contacts__form">
                <div className="form">
                    <form className="form__wrapper" id="contact-form" method="POST" action="/">
                        <div className="form__group">
                            <label className="form__label" htmlFor="contact_name">{Lang.form.name}</label>
                            <input className="form__input" id="contact_name" type="text" />
                        </div>
                        <div className="form__group">
                            <label className="form__label" htmlFor="contact_email">{Lang.form.email}</label>
                            <input className="form__input" id="contact_email" type="email" />
                        </div>
                        <div className="form__group">
                            <label className="form__label" htmlFor="contact_message">{Lang.form.message}</label>
                            <textarea className="form__textarea" id="contact_message" />
                        </div>
                        <div className="form__group">
                            <button className="form__button button">{Lang.form.button}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
