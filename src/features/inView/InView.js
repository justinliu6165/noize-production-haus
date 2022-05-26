import React, { useEffect, useRef, useState } from 'react'
import './InView.css';

export default function InView({children, animation='animate-fade', classes=''}) {
    const containerRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const options = {
            threshold: 0.5
        }

        let observer = new IntersectionObserver((entries) => {
            const [ entry ] = entries;
            if(entry.isIntersecting) {
                setInView(entry.isIntersecting);
                observer.unobserve(containerRef.current);
            }
        }, options);

        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            if(containerRef.current) observer.unobserve(containerRef.current)
        }

    }, []);


    return (
        <div className={`${classes} ${animation} ${inView ? 'animate' : ''}`} ref={containerRef}>
            {children}
        </div>
    )
}
