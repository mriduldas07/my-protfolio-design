import React from 'react';
import Toggle from '../Toggle/Toggle';
import './Navbar.css';
import {Link} from 'react-scroll';

const Navbar = ({toggle, setToggle}) => {
    return (
        <div className='n-wrapper'>
            <div className="n-left">
                <div className="n-name">Mridul</div>
                <Toggle
                toggle={toggle}
                setToggle={setToggle}
                ></Toggle>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <Link spy={true} to={"Navbar"} smooth={true} activeClass='activeClass'>
                        <li>Home</li>
                        </Link>
                        <Link spy={true} to={'Services'} smooth={true} activeClass='activeClass'>
                        <li>Services</li>
                        </Link>
                        <Link spy={true} to={'Experience'} smooth={true} activeClass='activeClass'>
                        <li>Experience</li>
                        </Link>
                        <Link spy={true} to={'Portfolio'} smooth={true} activeClass='activeClass'>
                        <li>Portfolio</li>
                        </Link>
                        <Link spy={true} to={'Testimonial'} smooth={true} activeClass='activeClass'>
                        <li>Testimonial</li>
                        </Link>
                    </ul>
                </div>
                <button className="button n-button">
                    Contact
                </button>
            </div>
        </div>
    );
};

export default Navbar;