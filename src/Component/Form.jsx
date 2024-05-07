import { useState } from 'react'
import './Form.css'
import Tempnavbar from './Tempnavbar'
import * as Yup from 'yup'
import Button from './button'

import { useNavigate } from 'react-router-dom'

import { useSetRecoilState } from 'recoil'
import { iscompleted } from '../store/atoms/config'

// create zod schema


// parse some invalid value
const Form = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        Fullname: "",
        email: ""
    })
    const setDones = useSetRecoilState(iscompleted)


    const [errors, setErrors] = useState({})
    const [done, setDone] = useState(false)
    const validationSchema = Yup.object({
        Fullname: Yup.string().required("First name is Required"),
        email: Yup.string().required("Email is required").email("Enter a valid email")
    })



    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
        if (data.name != "" && data.email != "") {
            setDone(true)
        }
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            await validationSchema.validate(data, { abortEarly: false })
            setDones(true)
            navigate("/completed")

        } catch (error) {
            const newError = {}
            error.inner.forEach(err => {
                newError[err.path] = err.message
            })
            setErrors(newError)
        }
    }
    return (
        <div className='flex flex-col gap-20'>
            <Tempnavbar />
            <div className="h-full w-full  justify-center items-center my-10">
                <form className="flex flex-col justify-center items-center gap-10" onSubmit={handlesubmit}>
                    <div></div>
                    <div>
                        <h2 className="mainheading">Registration Form</h2>
                        <h1 className="smallheading">Start Your success <br></br> Journey here!</h1>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col gap-5'>
                            <input placeholder="Enter Your name" type="text" name="Fullname" value={data.name} onChange={handleChange} />
                            {errors.Fullname && <div className="error">{errors.Fullname}</div>}
                            <input placeholder="Enter Your email" type="text" name="email" value={data.email} onChange={handleChange} />

                            {errors.email && <div className="error">{errors.email}</div>}
                        </div>
                        <Button value="Submit" className={done ? "bg-black button text-white" : "bg-[#c9c9d3] button"} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form