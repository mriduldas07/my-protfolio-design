import React from 'react';
import './Toggle.css';

import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';


const Toggle = ({toggle, setToggle}) => {
    return (
        <div className='toggle' onClick={() => setToggle(!toggle)}>
            {
                toggle ? <Moon size={'1.5rem'}></Moon> : <Sun size={'1.5rem'}></Sun>
            }
        </div>
    );
};

export default Toggle;