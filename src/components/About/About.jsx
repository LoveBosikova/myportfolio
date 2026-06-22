import IconPair from "../IconPair/IconPair"
import icons1 from './icons1.jsx';
import icons2 from "./icons2";
import icons3 from "./icons3";
import icons4 from "./icons4";
import styles from './about.scss'

import logo1 from "./cnd.png"
import logo2 from "./orly.jpg"
import logo3 from "./Group 9211.png"
import logo4 from "./logo-thevoice-full_b33872b.svg"
import logo5 from "./outline-logo.png"
// import logo1 from "./354-3548332_as-the-nail-industrys-most-innovative-brand-cnd™-cnd-logo-png.png"
// const icons1 = logo1


export default function About (props) {



    /*
quickSort([5, 3, 2, 1]) => [1, 2, 3, 5]
quickSort([1, 2, 3]) => [1, 2, 3]
*/

function quickSort(array) {

    let result = array

    if (array.length <= 1) return result;
    
    
    let center = Math.floor(array.length / 2);
    let startLeft = 0

    let leftPart = result.slice(startLeft, center)
    let rightPart = result.slice(center + 1)

    const newLeft = []
    const newRight = []
        for (const item of leftPart) {
            if (item >= result[center]) {
                newRight.push(item)
            } else {
                newLeft.push(item)
            }
        }
        for (const item of rightPart) {
            if (item >= result[center]) {
                newRight.push(item)
            } else {
                newLeft.push(item)
            }
        }


    return [...quickSort(newLeft), result[center], ...quickSort(newRight)];
}

console.log(quickSort([5, 3, 2, 1]));




    return (
        <section className="about__container" id="about">
            <div className="about">
                <div className="about__mainSection">
                    <div className="about__textSide">
                        <div className="about__textWrap">
                            <h1 className="about__title">SMM-специалист <span className="about__handWrap"><img className="about__handImg" src="wavingHand.png" alt="Hello! I'm waving you." /></span></h1>
                            <p className="about__description">Привет! Я Любовь Гулидова. Веду соцсети со смыслом и толком. Москва, Россия. 📍</p>
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
                    <p className="about__stackText">Проекты</p>
                </div>
                {/* <div className="icons__wrap">
                    <IconPair icons={logo1} />
                    <IconPair icons={logo2} />
                    <IconPair icons={logo3} />
                    <IconPair icons={logo4} />
                    <IconPair icons={logo5} />
                </div> */}
                <div className="icons__wrap">
                    <div className="about__icon-pair">
                        <img src={logo1} alt="CND logo" />
                    </div>
                    <div className="about__icon-pair">
                        <img src={logo2} alt="Project logo" />
                    </div>
                    <div className="about__icon-pair">
                        <img src={logo3} alt="Project logo" />
                    </div>
                    <div className="about__icon-pair">
                        <img src={logo4} alt="The Voice logo" />
                    </div>
                    <div className="about__icon-pair">
                        <img src={logo5} alt="Outline logo" />
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}