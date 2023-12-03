import React from 'react'
import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
    return (
        <>
            <div className="container-header">
                <div className='header'>
                    <div className='header-logo'>
                        <h4><img src="https://png.pngtree.com/png-vector/20220727/ourmid/pngtree-food-logo-png-image_6089719.png" style={{width:"20%" , cursor:'pointer'}} alt="" /> </h4>
                    </div>
                    <div className='header-items'>
                        <ul>
                            <li><Link to={"/"}>Home </Link> </li>
                            <li><Link to={"/about"}>  AboutUs</Link>  </li>
                            <li><Link to={"/contact "}>  ContactUs</Link>  </li>
                            <li><Link to={"/services"}>  Services </Link> </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header