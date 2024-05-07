
import { useRecoilValue } from "recoil"
import Logo from "../assets/brunel.png"
import { useNavigate } from 'react-router-dom'
import { iscompleted } from "../store/atoms/config"
const Tempnavbar = () => {
    const navigate = useNavigate()
    const handleclick = () => {
        navigate('/')
    }
    const iscomplete = useRecoilValue(iscompleted);

    return (
        <div className='flex justify-between px-9 py-5 w-full'>

            <img src={Logo} alt="" />
            {
                iscomplete ? "" :
                    <div className=' h-full px-2 border-2 rounded-full'>
                        <button onClick={handleclick} className='font-semibold text-lg text-[#000000]'>X</button>
                    </div>
            }
        </div>
    )
}

export default Tempnavbar