import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Carousel.css';
import Transitioning from './Transition';

import { selectCaseStudies } from '../api/CaseStudiesSlice';

import rightChevron from '../../assets/icons/right-chevron.svg';
import leftChevron from '../../assets/icons/left-chevron.svg';

export default function Carousel() {
    const cases = useSelector(selectCaseStudies);
    const [activeIndex, setActiveIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(0);
    const [animateDirection, setAnimateDirection] = useState('clipping-right');

    function shiftActive(dir) {
        if(dir === "left") {
            setActiveIndex(activeIndex > 0 ? activeIndex - 1 : cases.length - 1); 
        } else {
            setActiveIndex(activeIndex < cases.length - 1 ? activeIndex + 1 : 0); 
        }
    }

    function navigateSlides(dir) {
        if (dir === 'left') {
            setAnimateDirection("clipping-left");
            setTimeout(() => {
                shiftActive(dir)
            }, 100);
        } else {
            setAnimateDirection("clipping-right");
            setTimeout(() => {
                shiftActive(dir)
            }, 100);
        }
    }

    useEffect(() => {
        setPrevIndex(activeIndex === 0 ? cases.length -1 : activeIndex - 1);
        setNextIndex(activeIndex === cases.length - 1 ? 0 : activeIndex + 1);
    }, [activeIndex])

    return (
        <>
        <div className="clients">
            <div className="slides">
                <ul className="md:grid gap-16 align-middle grid-cols-6">
                    <li className="hidden md:flex justify-center flex-col"> 
                        <button onClick={() => navigateSlides('left')} className="relative w-full">
                            <Transitioning id={cases[activeIndex].id} animation={animateDirection} delay={500}>
                                <div className="project-img">
                                    <img src={cases[prevIndex].image.src} alt={cases[prevIndex].image.src}/>
                                    <div className="project-img--overlay"></div>
                                </div>
                            </Transitioning>
                        </button>
                    </li>
                    <li className="col-span-4"> 
                    
                        <Link to={`/case-studies/${cases[activeIndex].slug}`} className="relative">
                            <Transitioning id={cases[activeIndex].id} animation={animateDirection}>
                                <div className="project-img">
                                    <img src={cases[activeIndex].image.src} alt={cases[activeIndex].image.src}/>
                                </div>
                            </Transitioning>
                            <Transitioning id={cases[activeIndex].id + "header"} animation={animateDirection} delay={700}>
                                <div className='project-header z-10 bg-charcoal border-t-2 border-pink'>
                                    <h3 className="text-16px eurostile uppercase">{cases[activeIndex].title}</h3>
                                </div>
                            </Transitioning>
                        </Link>

                    </li>
                    <li className="hidden md:flex justify-center flex-col"> 
                        <button onClick={() => navigateSlides('right')} className="relative w-full">
                            <Transitioning id={cases[activeIndex].id} animation={animateDirection} delay={500}>
                                <div className="project-img">
                                    <img src={cases[nextIndex].image.src} alt={cases[nextIndex].image.src}/>
                                    <div className="project-img--overlay"></div>
                                </div>
                            </Transitioning>
                        </button>
                    </li>
                </ul>
            </div>
        </div>

        <div className="flex justify-center items-center">
            <button className="m-2" onClick={() => navigateSlides('left')}><img src={leftChevron} alt='chevron'/></button>
            <div className="eurostile uppercase whitespace-nowrap">{activeIndex + 1} / {cases.length}</div>
            <button className="m-2" onClick={() => navigateSlides('right')}><img src={rightChevron} alt='chevron'/></button>
        </div>

        </>
    )
}
