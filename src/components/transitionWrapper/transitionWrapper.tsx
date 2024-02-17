import React, { useEffect, ReactNode } from 'react';
import anime, { stagger } from 'animejs';
import { useLocation } from 'react-router';

interface TransitionWrapperProps {
  children: ReactNode;
}

export const TransitionWrapper: React.FC<TransitionWrapperProps> = ({ children }) => {
    const location = useLocation();
    const formP = document.querySelectorAll('.results_points');
  useEffect(() => {
    let timeLine = anime.timeline({
        easing: 'easeOutExpo',autoplay:true, loop:false,
    });
    
    //transition wrapper animation 
    timeLine.add( {
        targets: '.page-transition-element',
        opacity: [0, 1],
        translateX: [500, 0],
        duration: 500,
      },100);
    
      //Html elements' animation with staggering effect   
    timeLine.add({
        targets: 'p:not(.personas-card-text,.ingress),.coursesWrapper,h1,h2:not(.question-title,.personas-card-title)', 
        opacity: [0, 1],
        translateX: [200, 0],
        duration: 1500,
        delay: anime.stagger(200),
      },500);

      //Buttons and test's container animation  
      timeLine.add({
        targets: '.card_content,button',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1500,
        delay: anime.stagger(200),
      },600);


    
  }, [location.pathname]); // refresh the animation everytime the pathname is changed 

  return <div className="page-transition-element">{children}</div>;
};