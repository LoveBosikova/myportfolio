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
                    <Title text={'Опытный СММ-специалист. Москва, Россия 📍'}/>
                    <p className="me__text">Я SMM-специалист с опытом в медиа, PR и контент-маркетинге более 8 лет. Запускала и развивала digital-проекты с нуля, работала с Telegram-каналами, брендами, инфлюенсерами, СМИ и редакционными командами.

Мой фокус — сильный контент, понятная стратегия и рост аудитории. 
<br></br>
Я умею выстраивать редполитику, создавать контент-планы, запускать рекламные интеграции, работать с посевами, партнёрами и экспертами. 
<br></br>

Среди проектов — собственное Telegram-СМИ о релокации для IT-специалистов, онлайн-журнал Liberty, а также работа с брендами и медиа вроде Cosmopolitan, Kanobu, «ВкусВилл», Motorola, FixPrice и другими.
                    </p>
                </div>
            </div>

        </section>
    )
}