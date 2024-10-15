import axios from 'axios'
import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const VerifyEmail = () => {
    const [otp, setOtp] = useState("")
    const navigate = useNavigate()

    const handleOtpSubmit = async (e) => {
        e.preventDefault()
        if (otp) {
            const res = await axios.post('http://localhost:8000/api/verify-email/', {'otp': otp})
            const resp = res.data
            if (res.status === 200) {
                navigate('/login')
                alert(resp.message)
            }

        }

    }
    return (
        <div>
            <section>
                <div className="leaves">
                    <div className="set">
                        <div><img src="/imagelogin/leaf_01.png" alt="leaf1"/></div>
                        <div><img src="/imagelogin/leaf_02.png" alt="leaf2"/></div>
                        <div><img src="/imagelogin/leaf_03.png" alt="leaf3"/></div>
                        <div><img src="/imagelogin/leaf_04.png" alt="leaf4"/></div>
                        <div><img src="/imagelogin/leaf_01.png" alt="leaf5"/></div>
                        <div><img src="/imagelogin/leaf_02.png" alt="leaf6"/></div>
                        <div><img src="/imagelogin/leaf_03.png" alt="leaf7"/></div>
                        <div><img src="/imagelogin/leaf_04.png" alt="leaf8"/></div>
                    </div>
                </div>
                <img src="/imagelogin/bg.jpg" className="bg" alt="background"/>
                <img src="/imagelogin/trees.png" className="trees" alt="trees"/>

                <div className="login">
                    <h2>Verify Email</h2>
                    <form onSubmit={handleOtpSubmit}>
                        <label className="signlink" htmlFor="">Enter your Otp code:</label>
                        <div className="inputBox">
                            <input
                                type="password"
                                placeholder="Otp"
                                className="email-form"
                                name="otp"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                            />
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Send" className="submitButton" id="btn"/>
                        </div>
                        <div className="inputBox">
                        </div>
                    </form>
                </div>
            </section>
        </div>

    )
}

export default VerifyEmail
