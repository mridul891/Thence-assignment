import { Link } from 'react-router-dom'
import Logo from '../assets/brunel.png'
import Button from './button'

const Navbar = () => {
    return (
        <div className='flex justify-between gap-10 p-3 border-2 rounded-full items-center'>
            <div className='ml-10'>
                <img src={Logo} alt="" />
            </div>
            <div className='flex gap-10'>
                <Link to='form'>
                    <Button value="Get Projects" className="p-5 rounded-full  border-[#808080] border-2 hover:bg-[#F1F1F1]" />
                </Link>
                <Button value="OnBoard Talent" className="p-5 rounded-full bg-black text-white hover:bg-[#4E4E4E]" />
            </div>
        </div>

    )
}

export default Navbar