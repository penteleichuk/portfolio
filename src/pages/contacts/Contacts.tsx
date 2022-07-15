import {useFormik} from 'formik';
import {useState} from 'react';
import {LanguageType} from '../../App';
import {ContactLang} from '../../langs/contact';
import './Contacts.scss';
import {send} from "../../utilities/contact";

export const Contacts = ({language}: { language: LanguageType }) => {
    const [message, setMessage] = useState<string | null>(null);
    const Lang = ContactLang[language];

    type ContactType = {
        name?: string
        email?: string
        message?: string
    }

    const validate = (values: ContactType) => {
        const errors: ContactType = {};
        if (!values.name) {
            errors.name = Lang.form.validate.required;
        } else if (values.name.length > 50) {
            errors.name = Lang.form.validate.lessName;
        }

        if (!values.message) {
            errors.message = Lang.form.validate.required;
        } else if (values.message.length > 500) {
            errors.message = Lang.form.validate.lessMessage;
        }

        if (!values.email) {
            errors.email = Lang.form.validate.required;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = Lang.form.validate.invalidEmail;
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate,
        onSubmit: async values => {
            const {email, name, message} = values;

            formik.resetForm();
            setMessage(Lang.form.success);

            try {
                await send(email, name, message);
            } catch (e) {
                console.error(e, "error send email");
            }
        },
    });

    return (
        <div className="contacts">
            <h5 className="contacts__title title">{Lang.form.title}</h5>
            <div className="contacts__form">
                <div className="form">
                    <form className="form__wrapper" id="contact-form" onSubmit={formik.handleSubmit}>
                        <div className="form__group">
                            <label className="form__label" htmlFor="contact_name">{Lang.form.name}
                                {formik.touched.name && formik.errors.name ?
                                    <span> - {formik.errors.name}</span> : null}</label>
                            <input className="form__input" id="contact_name" {...formik.getFieldProps('name')}
                                   type="text"/>
                        </div>
                        <div className="form__group">
                            <label className="form__label" htmlFor="contact_email">{Lang.form.email}
                                {formik.touched.email && formik.errors.email ?
                                    <span> - {formik.errors.email}</span> : null}</label>
                            <input className="form__input" id="contact_email" {...formik.getFieldProps('email')}
                                   type="email"/>
                        </div>
                        <div className="form__group">
                            <label className="form__label" htmlFor="contact_message">{Lang.form.message}
                                {formik.touched.message && formik.errors.message ?
                                    <span> - {formik.errors.message}</span> : null}</label>
                            <textarea className="form__textarea"
                                      id="contact_message" {...formik.getFieldProps('message')} />
                        </div>
                        {message && <div className="form__success">{message}</div>}
                        {!message && <div className="form__group">
                            <button type='submit' className="form__button button">{Lang.form.button}</button>
                        </div>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
}
