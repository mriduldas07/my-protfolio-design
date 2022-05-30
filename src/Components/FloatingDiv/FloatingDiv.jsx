import React from 'react';
import './FloatingDiv.css'

const FloatingDiv = ({img}) => {
    return (
        <div className='floatingDiv'>
            <img src={img} alt="" />
        </div>
    );
};

export default FloatingDiv;