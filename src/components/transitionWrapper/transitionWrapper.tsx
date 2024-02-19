import React, { useEffect, ReactNode } from 'react';
import anime, { stagger } from 'animejs';
import { useLocation } from 'react-router';

interface TransitionWrapperProps {
  children: ReactNode;
}

export const TransitionWrapper: React.FC<TransitionWrapperProps> = ({ children }) => {
    const location = useLocation();
  useEffect(() => {
    let timeLine = anime.timeline({
        easing: 'easeOutExpo',autoplay:true, loop:false,
    });
    
    //exclude animation on test quiz
    if(location.pathname.includes("/fragor") && location.pathname !== "/fragor/onboarding") return ; 
    
    //transition wrapper animation 
    timeLine.add( {
        targets: '.page-transition-element', 
        opacity: [0, 1],
        translateX: [500, 0],
        duration: 500,
      },100);

      //Home button animation 
      timeLine.add({
        targets: '.homeButton',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1500,
        delay: anime.stagger(200),
      },500);
    
  }, [location.pathname]); // refresh the animation everytime the pathname is changed 

  return <div className="page-transition-element">{children}</div>;
};