import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Me from './components/Me/Me';
import Portfolio from './components/Portfolio/Portfolio';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

export default class App extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header />
                <main>
                    <About />
                    <Me />
                    <Portfolio />
                    <Contacts />
                    <Footer />
                </main>
            </>
        )
    }
}