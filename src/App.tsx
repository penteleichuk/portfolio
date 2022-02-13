import React from 'react';
import {Header} from "./components/header/Header";
import {Page} from "./components/common/page/Page";
import {Main} from './components/main/Main';
import {Skills} from "./components/skills/Skills";
import {Works} from "./components/works/Works";
import {Offer} from "./components/offer/Offer";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";
import './App.scss';
import {AnimationBackground} from "./components/common/animation-background/AnimationBackground";

export const App = () => {
    return (
        <div className="app">
            <AnimationBackground/>
            <Header/>
            <main className="page">
                <Page id="main"> <Main/> </Page>
                <Page id="skill"> <Skills/> </Page>
                <Page id="work"> <Works/> </Page>
                <Page heightAuto={true}> <Offer/> </Page>
                <Page id="contact"> <Contacts/> </Page>
                <Page heightAuto={true}> <Footer/> </Page>
            </main>
        </div>
    );
}
