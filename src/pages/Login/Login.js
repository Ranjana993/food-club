import React from 'react'
import "./Login.css"


const Login = () => {
    return (
        <>
        <div className="login_form">
                <form>
                    <label htmlFor="name">Name</label><br />
                    <input type="text" placeholder='Enter Your name here..' /><br />
                    <label htmlFor="name">Email </label><br />
                    <input type="text" placeholder='Enter Your email here....' /><br />
                    <label htmlFor="msg">Message</label><br />
                    <textarea placeholder='Enter your message here' name="msg" id="" cols="30" rows="10"></textarea>
                    <button className='btn_contact'>Submit</button>
                </form>
        </div>
            
        </>
    )
}

export default Login