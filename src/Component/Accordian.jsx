
import './FAQ.css'
import { Data } from './Data.js';
import { useState } from "react";
const Accordian = () => {
    const [selected, setSelected] = useState(null)
    const toggle = (index) => {
        if (selected === index) {
            return setSelected(null);
        }
        setSelected(index)
    }
    return (
        <div className="w-[40vw] ">
            {Data.map((item, index) => {
                return (
                    <div className="item" key={index}>
                        <div className="title" onClick={() => toggle(index)}>
                            <h2>{item.question}</h2>
                            <span>{selected == index ? '-' : '+'}</span>
                        </div>
                        <div className={selected == index ? 'content show' : 'content'}>{item.answer}</div>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default Accordian