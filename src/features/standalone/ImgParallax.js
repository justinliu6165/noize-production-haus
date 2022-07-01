import React, { useEffect } from 'react'

export default function ImgParallax({image, speed=-0.5, offset=0}) {

    let imgPercent = 0;

    const parallaxImg = () => {
        const img = document.getElementById("parallax-img");
        // 1. Detect if element is in view
        const parentHeight = img.parentElement.getBoundingClientRect().height;
        const imgY = img.getBoundingClientRect().top;
        const winHeight = window.innerHeight;

        if((imgY - winHeight) < 0 && (imgY + img.offsetHeight) > 0) {
            // Number of pixels shown after block appear
            var imgBottom = (imgY * speed);
            // Max number of pixels until block disappear
            var imgTop = winHeight + parentHeight;
            // Porcentage between start showing until disappearing
            imgPercent = ((imgBottom / imgTop) * 100) + offset;
        }

        img.style.transform = `translate(-50%, ${imgPercent}%)`;
    }

    useEffect(() => {
        
        setTimeout(() => {
            parallaxImg();
            window.addEventListener('scroll', parallaxImg);
        }, 500);
        
        return () => window.removeEventListener('scroll', parallaxImg);
    }, []);

    return (
        <div className='w-full h-full relative overflow-hidden'>
            <img 
            src={image.src} alt={image.alt} 
            style={{
                position: 'absolute',
                top: 0,
                left: "50%",
                transform: 'translate(-50%, 0%)'
            }} 
            id="parallax-img"/>
        </div>
    )
}
