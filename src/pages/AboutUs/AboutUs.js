import React from 'react';
import './AboutUs.css';
const aboutImage = '../../../../img/About.jpg';

const AboutUs = () => {
    const sectionStyle = {
        backgroundImage: `url(${aboutImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        position: 'relative',
        // opacity:0.8

    };

    return (
        <div className="about_us" style={sectionStyle}>
            <div className="image">
                <h2>Lorem ipsum dolor  sit amet consecteturelit.</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia perferendis doloribus quasi <br /> accusantium aspernatur non sit sint esse dolor vero recusandae numquam porro architecto, cum soluta corporis velit excepturi provident!</p>
                <button>Explore more</button>
            </div>
        </div>
    );
};

export default AboutUs;
