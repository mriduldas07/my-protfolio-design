import React from 'react';
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import resume from '../Services/resume.pdf'

const Services = () => {
    return (
        <div className='services'>
            {/* left side */}
            <div className="awesome">
                <span>My awesome</span>
                <span>services</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, voluptatum consectetur <br /> quia expedita quasi ad dicta fugit aliquam quae in ea deserunt consequuntur molestiae libero temporibus iusto nostrum officia quam!</span>
                <a href={resume} download className="button s-button">
                Download CV
                </a>   
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
            {/* right side */}
            <div className="cards">
                {/* 1st card */}
                <div style={{left:'14rem'}}>
                    <Card
                        emoji = {HeartEmoji}
                        heading = {"Design"}
                        detail = {"Figma, Sketch"}
                    ></Card>
                </div>
                {/* 2nd card */}
                <div style={{top: '12rem', left: '-4rem'}}>
                    <Card
                    emoji={Glasses}
                    heading={'Developer'}
                    detail={'Html, Css, Javascript,React'}
                    ></Card>
                </div>
                <div style={{top: '19rem', left: '12rem'}}>
                    <Card
                    emoji={Humble}
                    heading={'UI/UX'}
                    detail={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, voluptatum consectetur'}
                    ></Card>
                </div>
            </div>
        </div>
    );
};

export default Services;