import React, { useState } from 'react'
import { toast } from 'react-toastify'
import {useNavigate} from "react-router-dom";
import AxiosInstance from '../utils/AxiosInstance'

const PasswordResetRequest = () => {
    const [email, setEmail]=useState("")
    const navigate=useNavigate()


    const handleSubmit = async(e)=>{
        e.preventDefault()
        if (email) {
          const res = await AxiosInstance.post('password-reset/', {'email':email})
           if (res.status === 200) {
            console.log(res.data)
            alert('a link to reset your password has be sent to your email')
           }
           setEmail("")
            navigate("/login")
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
                  <h2>Enter your registered email</h2>
                  <form onSubmit={handleSubmit}>
                      <label className="signlink" htmlFor="">Email</label>
                      <div className="inputBox">
                          <input
                              type="email"
                              placeholder="email"
                              className="email-form"
                              value={email}
                              name="email"
                              onChange={(e) => setEmail(e.target.value)}
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

export default PasswordResetRequest