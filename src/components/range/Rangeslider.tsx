import { useState } from 'react';
import './rangeslider.scss';

const RangeSlider = () => {
    const [value, setValue] = useState(0)

    const handleChange = (e: any) => {
        setValue(e.target.value)
    }

    return (
        <section className='range_component'>
            <p>{value}</p>
            <input type="range" min="0" max="10" value={value} onChange={handleChange} />
        </section>
    )
}

export default RangeSlider