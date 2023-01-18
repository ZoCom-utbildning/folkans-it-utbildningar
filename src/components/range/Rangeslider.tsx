import { useState } from 'react';
import './rangeslider.scss';

type Props = {
    optionText: string;
    id: number;
    questionId: number;
}

const RangeSlider = ({ optionText, id, questionId }: Props) => {
    const [value, setValue] = useState<number>(0)

    //ta värden från databas beroende på fråga
    const minValue = 0
    const maxValue = 100

    const handleChange = (e: any) => {
        setValue(e.target.value)
    }

    const handleClick = () => {
        //
    }

    //value är värdet som ska skickas som svar
    return (
        <section className='range_component'>
            <p>{optionText}</p>
            <p>{value}</p>
            <input className='range' type="range" min={minValue} max={maxValue} value={value} onChange={handleChange} />
            <button className='formButton' onClick={handleClick}>Gå vidare</button>
        </section>
    )
}

export default RangeSlider