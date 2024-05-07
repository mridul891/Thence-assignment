
import Union from '../assets/Union.png'
import './Form.css'
import './FAQ.css'
import Accordian from "./Accordian.jsx";


const FAQ = () => {
    return (
        <div className='flex justify-between gap-10 p-3 items-center bg-[#E8EEE7] rounded-3xl mt-10'>
            <div className="text-center p-10">
                <p className="paraHeading3">What&apos;s on your mind</p>
                <h1 className="font-semibold text-4xl mb-10">Ask Questions</h1>
                <img src={Union} alt="" />
            </div>
            <Accordian />
        </div >
    )
}

export default FAQ;