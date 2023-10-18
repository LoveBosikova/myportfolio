import styles from './project.scss';

import cn from 'classnames';

export default function Project (props) {

    const flexDirection = cn('project__wrap', {
        'flex-column': props.flex === 'column',
        'flex-reverse': props.flex === 'reverse'});

    return (
        <article className="project">
            <div className={flexDirection}>
                <div className="project__imgSide">
                    <a className="project__imgWrap" href={props.demo} target="_blank">
                        <img src={props.img} alt={props.alt} className="project__img" />
                    </a>
                </div>
                <div className="project__textSide">
                    <h3 className="project__name">{props.name}<span className="project__timing">{props.time}</span><span className="project__emoji">{props.emoji}</span></h3>
                    <p className="project__description">{props.description}</p>
                    <div className="project__stack">
                        <div className="project__techWrap">
                            <p className="project__techname">{props.tech1}</p>
                        </div>
                        <div className="project__techWrap">
                            <p className="project__techname">{props.tech2}</p>
                        </div>
                    </div>
                    <div className="links">
                        <a className="links__item links__item--code" target="_blank" href={props.git} rel="noreferrer">
                            <p className="links__text links__text--code">Code</p>  
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="links__icon links__icon--code">
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                                </path>
                            </svg>
                        </a>
                        <a className="links__item links__item--demo" target="_blank" href={props.demo} rel="noreferrer">
                            <p className="links__text links__text--demo">Live Demo</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="links__icon links__icon--demo">
                                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6">
                                </path>
                                <path d="M11 13l9 -9">
                                </path>
                                <path d="M15 4h5v5">
                                </path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </article>
    )
}