import { useLayoutEffect, useState } from 'react';
import { Header } from "./pages/app/header/Header";
import { Wrapper } from "./pages/app/wrapper/Wrapper";
import { Main } from './pages/main/Main';
import { Skills } from "./pages/skills/Skills";
import { Works } from "./pages/works/Works";
import { Offer } from "./pages/offer/Offer";
import { Contacts } from "./pages/contacts/Contacts";
import { Footer } from "./pages/app/footer/Footer";
import './styles/app.scss';
import './styles/animation.scss'

export type LanguageType = 'ru' | 'en' | 'ukr' | 'ro';

export const App = () => {
    const [language, setLanguage] = useState<LanguageType>('en');

    useLayoutEffect(() => {
        const getStorageLanguage = localStorage.getItem('language');
        if (getStorageLanguage) {
            setLanguage(JSON.parse(getStorageLanguage));
        }
    }, []);

    useLayoutEffect(() => {
        localStorage.setItem('language', JSON.stringify(language));
    }, [language])

    return (
        <div className="app">
            <Header language={language} setLanguage={setLanguage} />
            <main className="page">
                <Wrapper id="main" animationBg={true}> <Main language={language} /> </Wrapper>
                <Wrapper id="skill"> <Skills language={language} /> </Wrapper>
                <Wrapper id="work"> <Works language={language} /> </Wrapper>
                <Wrapper heightAuto={true}> <Offer language={language} /> </Wrapper>
                <Wrapper id="contact"> <Contacts language={language} /> </Wrapper>
                <Wrapper heightAuto={true}> <Footer language={language} /> </Wrapper>
            </main>
        </div>
    );
}
