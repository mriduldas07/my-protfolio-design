import React from 'react';
import './Works.css'
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import facebook from '../../img/Facebook.png'

const Works = () => {
    return (
        <div className='works'>
            <div className="awesome">
                <span>Works for All these</span>
                <span>Brands & Clients</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, voluptatum consectetur <br /> quia expedita quasi ad dicta fugit aliquam quae in ea deserunt <br />  consequuntur molestiae libero temporibus iusto nostrum officia quam!</span>
                <button className="button h-button">
                Hire Me
                </button>   
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
            {/* right side */}
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={facebook} alt="" />
                    </div>
                </div>
                <div className="w-bgCircle blueCircle"></div>
                <div className="w-bgCircle yellowCircle"></div>
            </div>
        </div>
    );
};

export default Works;