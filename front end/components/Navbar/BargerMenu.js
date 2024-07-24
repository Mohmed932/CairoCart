"use client"
import React, { useState } from 'react';

const BargerMenu = () => {
    const [showBargerMenu, setShowBargerMenu] = useState(false);

    const handleShow = () => {
        setShowBargerMenu(!showBargerMenu);
    };

    return (
        <div className='p-3 rounded-md bg-gray-100 delay-500' onClick={handleShow}>
            <span className={`w-8 h-0.5 transform ${showBargerMenu ? '-rotate-25' : ''} bg-black block mt-2`}></span>
            <span className={`w-8 ${showBargerMenu ? 'h-0 inline' : 'h-0.5'} bg-black block mt-2`}></span>
            <span className={`w-8 h-0.5 transform ${showBargerMenu ? 'rotate-15' : ''} bg-black block mt-2`}></span>
        </div>
    );
}

export default BargerMenu;
