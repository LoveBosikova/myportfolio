import Uptitle from "../Uptitle/Uptitle";
import Title from "../Title/Title";
import styles from './me.scss';


export default function Me (props) {
    return (
        <section className="me__wrap" id="home">
            <div className="me">
                <div className="me__imgSide">
                    <img className="me__img" src="./meComputer.jpg" alt="My estetic workspace" />
                    <img className="me__imgDeveloper" src="./developer.png" alt="Developer" />
                    <img className="me__imgCircleText" src="./circleText.svg" alt="Text 'Frontend Web-debeloper'" />
                </div>
                <div className="me__textSide">
                    <Uptitle text={'ABOUT ME'} />
                    <Title text={'A dedicated Front-end Developer based in Moscow, Russia 📍'}/>
                    <p className="me__text">I entered IT in 2014 and worked as a tester in game development. Then for more than 6 years I worked in large magazines as an editor and project manager: Igromania, Kanobu, Cosmopolitan, Grazia, etc. Over the last year I have been evolving as a web developer: I have been developing websites and web applications.
                    </p>
                </div>
            </div>

        </section>
    )
}