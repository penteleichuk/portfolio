import React from 'react';
import './Contacts.scss';

export const Contacts = () => {
    return (
        <div className="contacts">
            <h5 className="contacts__title title">
                Contact With Me
            </h5>
            <div className="contacts__form">
                <div className="form">
                    <form className="form__wrapper" id="contact-form" method="POST" action="/">
                        <div className="form__group">
                            <label className="form__label" htmlFor="contact_name">Name</label>
                            <input className="form__input" id="contact_name" type="text"/>
                        </div>
                        <div className="form__group">
                            <label className="form__label" htmlFor="contact_email">Email</label>
                            <input className="form__input" id="contact_email" type="email"/>
                        </div>
                        <div className="form__group">
                            <label className="form__label" htmlFor="contact_message">Message</label>
                            <textarea className="form__textarea" id="contact_message"/>
                        </div>
                        <div className="form__group">
                            <button className="form__button button">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
