import React, {useRef} from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group';

export default function Transition({ children, id, animation, delay=260 }) {
  const nodeRef = useRef(null);

  // Change duration in Carousel.css also
  // css variable: (--carousel-animation-duration)
  const durationAnimation = 750;
  document.documentElement.style.setProperty('--carousel-animation-duration', `${durationAnimation}ms`);

  return (
    <SwitchTransition mode={'out-in'}>
        <CSSTransition
            nodeRef={nodeRef}
            in
            key={id}
            timeout={durationAnimation + delay}
            classNames={animation}
        >
          <div ref={nodeRef}>
           {children}
          </div>
        </CSSTransition>
    </SwitchTransition>
  )
}
