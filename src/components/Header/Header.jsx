import React from 'react';
import styles from './header.scss'

export default class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='header__name'>Liubov.dev</div>
                <nav className='header__navWrap'>
                    <ul className='header__navitems'>
                        <li className='header__navitem'><a className='header__navlink' href="#home">Home</a></li>
                        <li className='header__navitem'><a className='header__navlink' href="#about">About</a></li>
                        <li className='header__navitem'><a className='header__navlink' href="#projects">Projects</a></li>
                        <li className='header__navitem'><a className='header__navlink' href="#contacts">Contacts</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}