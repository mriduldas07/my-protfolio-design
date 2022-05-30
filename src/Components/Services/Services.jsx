import React from 'react';
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";

const Services = () => {
    return (
        <div className='services'>
            {/* left side */}
            <div className="awesome">
                <span>My awesome</span>
                <span>services</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, voluptatum consectetur <br /> quia expedita quasi ad dicta fugit aliquam quae in ea deserunt consequuntur molestiae libero temporibus iusto nostrum officia quam!</span>
                <button className="button s-button">Download CV</button>
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
            {/* right side */}
            <div className="cards">
                im am right
            </div>
        </div>
    );
};

export default Services;