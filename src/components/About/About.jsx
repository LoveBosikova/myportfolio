import IconPair from "../IconPair/IconPair"
import icons1 from './icons1.jsx';
import icons2 from "./icons2";
import icons3 from "./icons3";
import icons4 from "./icons4";
import styles from './about.scss'


export default function About (props) {
    return (
        <section className="about__container" id="about">
            <div className="about">
                <div className="about__mainSection">
                    <div className="about__textSide">
                        <div className="about__textWrap">
                            <h1 className="about__title">Front-End React Developer <span className="about__handWrap"><img className="about__handImg" src="wavingHand.png" alt="Hello! I'm waving you." /></span></h1>
                            <p className="about__description">Hi, I'm Liubov Bosikova. A passionate Front-end React Developer based in Moscow, Russia. 📍</p>
                    <div className="about__IconsWrap">
                        <div className="about__icon">
                            <a className="about__linkIcon about__linkIcon--git" href="https://github.com/LoveBosikova" target='_blank'>
                                <svg className="about__link about__link--git" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                                    </path>
                                </svg>
                            </a>
                        </div>
                        <div className="about__icon">
                            <a className="about__linkIcon about__linkIcon--linkedIn" href="https://www.linkedin.com/me?trk=p_mwlite_feed_updates-secondary_nav" target='_blank'>
                                <svg className="about__link about__link--linkedIn" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                                    <path d="M8 11l0 5"></path>
                                    <path d="M8 8l0 .01"></path>
                                    <path d="M12 16l0 -5"></path>
                                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
                <div className="about__imgSide border-animation">
                </div>
            </div>


            
            <div className="about__technologies">
                <div className="about__stackTextWrap">
                    <p className="about__stackText">Tech Stack</p>
                </div>
                <div className="icons__wrap">
                    <IconPair icons={icons1} />
                    <IconPair icons={icons2} />
                    <IconPair icons={icons3} />
                    <IconPair icons={icons4} />
                </div>
            </div>
            </div>
        </section>
    )
}