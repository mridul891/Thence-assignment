
import './Form.css'
import main from '../assets/main.png'
import Button from './button'
import Carousel from './Carousel'
const Main = () => {
    return (
        <div className='pt-20'>
            <div>
                <h2 className="mainheading">Success stories</h2>
                <h1 className="smallheading">Every success journey <br />we’ve encountered.</h1>
            </div>
            <div className='mt-20 flex justify-start gap-[20rem]'>
                <div>
                    <img src={main} alt="" />
                </div>
                <div className='flex flex-col justify-center items-start gap-10'>
                    <Carousel />
                    <Button value="Explore More ->" className="bg-black text-white p-8 rounded-full mt-20" />
                </div>
            </div>
        </div>
    )
}

export default Main