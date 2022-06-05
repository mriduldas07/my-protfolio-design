import React from 'react';
import './Intro.css'
import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';
import instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {motion} from 'framer-motion'

const Intro = () => {

    const transition = { duration : 2, type: 'spring'}
    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am </span>
                    <span>Mridul Das</span>
                    <span>Frontend Developer with high level of experience in web designing and development, producting the Quality work</span>
                </div>
                <button className="button i-button">Hire Me</button>
                <div className="i-icons">
                    <img src={github} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                initial={{left: '-36%'}}
                whileInView={{left: '-24%'}}
                transition={transition}
                src={glassesimoji} alt="" />
                <motion.div
                initial={{top: '-4%', left: '74%'}}
                whileInView={{left: '68%'}}
                transition={transition}
                style={{top: '-4%', left: '68%'}}
                className='floating-div'
                >
                    <FloatingDiv
                    img={crown}
                    ></FloatingDiv>
                </motion.div>
                <motion.div
                initial={{left: '30%', top: '75%'}}
                whileInView={{left: "0%"}}
                transition={transition}
                style={{top: '18rem', left: '0rem'}}
                className='floating-div'
                >
                    <FloatingDiv
                    img={thumbup}
                    ></FloatingDiv>
                </motion.div>
                    {/* blur div es */}
                    <div className="blur" style={{background: 'rgb(238 210 255)'}}></div>
                    <div className='blur ' style={{
                        background: '#C1F5FF',
                        top: '17rem',
                        width: '21rem',
                        height: '11rem',
                        left:'-9rem'
                }}></div>
            </div>
        </div>
    );
};

export default Intro;