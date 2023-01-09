import { useState } from 'react';
import './rangeslider.scss';

const RangeSlider = () => {
    const [value, setValue] = useState<number>(0)

    const minValue = 0
    const maxValue = 100

    const handleChange = (e: any) => {
        setValue(e.target.value)
    }

    const handleClick = () => {
        //
    }

    return (
        <section className='range_component'>
            <p>{value}</p>
            <input className='range' type="range" min={minValue} max={maxValue} value={value} onChange={handleChange} />
            <button className='formButton' onClick={handleClick}>Gå vidare</button>
        </section>
    )
}

export default RangeSlider