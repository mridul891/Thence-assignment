import Tempnavbar from "./Tempnavbar"
import './Form.css'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import useCount from "./useCount"


const Completed = () => {
    const navigate = useNavigate()
    const { secondsleft, start } = useCount();

    setTimeout(function () {
        navigate("/")
    }, 5000)
    return (
        <div className="h-[100vh] flex flex-col justify-between">
            <Tempnavbar />
            <div className="flex flex-col items-center text-center">
                <div >✅</div>
                <div>
                    <p className="mainheading">success submitted</p>
                    <h1 className="smallheading">Congratulations</h1>
                    <p className="paraHeading">Your request has been successfully submitted to us. We <br />will validate your information and reach out to your<br /> shortly with updates</p>
                </div>
            </div>
            <div className="text-center">
                <p className="paraHeading2">
                    Redirecting you to Homepage in <b className="text-black">5 seconds</b></p>
            </div>
        </div>
    )
}

export default Completed