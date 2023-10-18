import Uptitle from "../Uptitle/Uptitle";
import Title from "../Title/Title";
import Project from "../Project/Project";
import styles from './portfolio.scss';

export default function Portfolio (props) {
    return (
        <section className="portfolio__wrap" id="projects">
            <div className="portfolio">
                <Uptitle text={'PORTFOLIO'}/>
                <Title text={'Each project is a unique piece of development 🧩'}/>
                <div className="portfolio__projectsWrap">
                    <Project img={'./SleepBabySleep.webp'}
                            alt={'Sleeptracker for kids'}
                            name={'SleepBabySleep'}
                            time={'(Summer 2023)'}
                            emoji={'💤'}
                            git={'https://github.com/LoveBosikova/sleepBabySleep'}
                            demo={'https://lovebosikova.github.io/sleepBabySleep/'}
                            description={'The SleepBabySleep website is an online platform that allows users to normalize kids sleeping. It provides an interface for input, searching, saving sleep intervals and statistic scrutiny.'}
                            tech1={'SCSS'}
                            tech2={'Vanila JS'}
                            flex={'column'}/>

                    <Project img={'./yandexScooter.webp'}
                            alt={'Lending for yandexScooter'}
                            name={'YandexScooter'}
                            time={'(August 2023)'}
                            emoji={'🛴'}
                            description={'The landing page tells customers about the benefits of the electric scooter rental service. Contains a link to join the scooter community.'}
                            tech1={'SCSS'}
                            tech2={'Vanila JS'}
                            demo={'https://lovebosikova.github.io/yandexGoScooter/'}
                            git={'https://github.com/LoveBosikova/yandexGoScooter'}
                            flex={'reverse'}/>

                    <Project img={'./MyEnglish.webp'}
                            alt={'WebApp for MyEnglish'}
                            name={'MyEnglish'}
                            time={'(winter-spring 2023)'}
                            emoji={'🗽'}
                            description={'The English language school web application allows you to choose a group by level and a tutor. The site also has a test that will help determine your level of English proficiency.'}
                            tech1={'SASS'}
                            tech2={'Vanila JS'}
                            demo={'https://taorkon.github.io/english-school/'}
                            git={'https://github.com/LoveBosikova/english-school'}
                            flex={'column'}/>

                    <Project img={'./flyjet.webp'}
                            alt={'Landing for TFT Aero'}
                            name={'TFT Aero'}
                            time={'(november 2022)'}
                            emoji={'🚀'}
                            description={'Landing page for flight stimulation allows you to choose the service tariff, type of flight simulator and instructor.'}
                            tech1={'Vanila СSS'}
                            tech2={'Vanila JS'}
                            demo={'https://lovebosikova.github.io/superproject/'}
                            git={'https://github.com/LoveBosikova/superproject'}
                            flex={'reverse'}/>

                    <Project img={'./DinMy.webp'}
                            alt={'Landing for a dog sitter'}
                            name={'DinMy'}
                            time={'(December 2022)'}
                            emoji={'🐶'}
                            description={'Dogsitter\'s website: helps the buyer understand why to train a dog, find out the stages of training and the cost of training. And, of course, write to the dogsitter directly.'}
                            tech1={'Vanila СSS'}
                            tech2={'Vanila JS'}
                            git={'https://github.com/LoveBosikova/1stProject'}
                            demo={'https://lovebosikova.github.io/1stProject/'}
                            flex={'column'}/>
                </div>
            </div>
        </section>
    )
}