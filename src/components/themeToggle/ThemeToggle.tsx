import './themeToggle.scss';
import { useState, useEffect } from 'react';
import anime from 'animejs';

function ThemeToggle() {
    const [checked, setChecked] = useState(false);
    const [toggleText, setToggleText] = useState("Dark mode");
    const [classNames, setClassNames] = useState("slider right");


    useEffect(() => {
        if(checked) {
            setToggleText("Light mode");
            setClassNames("slider left");
        } else if(!checked) {
            setToggleText("Dark mode");
            setClassNames("slider right");
        } else {
            console.log("What is going on?");
        }
    }, [checked]);

    const isChecked = (event: any) => {
        console.log(event.target.checked);
        setChecked(event.target.checked);

        anime({
            targets: '.slider',
            duration: 500,
            easing: 'easeOutCubic',
            keyframes: [
                { 
                    color: '#00000000',
                },
                { 
                    color: '#ffffff',
                }
            ]
        });
    }

    // 0% {
    //     color: $light;
    // } 50% {
    //     color: #81818100;
    // } 100% {
    //     color: $light;
    // }

    return (
        <label className="themeToggler">
            <input onChange={isChecked} type="checkbox" />
            <span className={classNames}>{ toggleText }</span>
        </label>
    );
}

export default ThemeToggle;