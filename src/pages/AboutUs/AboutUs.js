import React from 'react'
import "./AboutUs.css"
import Testimonial from '../Testimonial/Testimonial';
import { Link } from 'react-router-dom';

const profile = "/img/about.jpeg"
const about = "/img/about-us.jpg";


const AboutUs = () => {
    return (
        <div className='wrapper_about'>
            <h1>Get to Know more about us ...</h1> <hr />
            <div className='about_us'>
                <div className="image">
                    <img src={about} alt="" />
                </div>
                <div className="about_me">
                    <div className="profile">
                        <img src={profile} alt="" />
                        <h3>Name : Ranajana Yadav </h3>
                        <h4>Profession : Software Developer </h4>
                        <p className='para'>
                            <b> Description : </b> My name is Kumari Ranjana Yadav, and I am a frontend developer with a strong passion for technology. I continuously strive to expand my knowledge across various domains and stay updated with the latest trends in the tech industry. I love exploring new technologies and enjoy working on diverse projects that challenge and inspire me.

                        </p>
                        <div className='links'>
                            <h2>Connect Me ✌🏼</h2>
                            <ul>
                                <li>
                                    <Link to={""}> <i className="fa fa-instagram" style={{ fontSize: "100%", color: "red" }}> <br /> <span style={{  color: "green" }}>instagram</span></i></Link>
                                </li>
                                <li>
                                    <Link to={""}> <i className="fa fa-instagram" style={{ fontSize: "100%" }}><br />Github</i></Link>
                                </li>
                                <li>
                                    <Link to={""}> <i className="fa fa-instagram" style={{ fontSize: "100%" }}><br />Twitter</i></Link>
                                </li>
                                <li>
                                    <Link to={""}> <i className="fa fa-instagram" style={{ fontSize: "100%" }}><br />instagram</i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial Area */}
            <Testimonial />
        </div>
    )
}

export default AboutUs