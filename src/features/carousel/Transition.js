import React, {useRef} from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group';

export default function Transition({ children, id, animation, delay=0 }) {
  const nodeRef = useRef(null);

  return (
    <SwitchTransition mode={'out-in'}>
        <CSSTransition
            nodeRef={nodeRef}
            in
            key={id}
            timeout={750 + delay}
            classNames={animation}
        >
          <div ref={nodeRef}>
           {children}
          </div>
        </CSSTransition>
    </SwitchTransition>
  )
}
