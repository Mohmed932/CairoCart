"use client"
import { motion } from "framer-motion";
import React from 'react';

const BargerMenu = ({showBargerMenu, setShowBargerMenu}) => {
    const handleShow = () => {
        setShowBargerMenu(!showBargerMenu);
    };

    return (
        <motion.div className='p-2 rounded-md bg-gray-100 delay-500' onClick={handleShow} whileTap={{ scale: 0.8 }}>
            <span className={`w-8 h-0.5 transform ${showBargerMenu ? '-rotate-25' : ''} bg-black block mt-2`}></span>
            <span className={`w-8 ${showBargerMenu ? 'h-0 inline' : 'h-0.5'} bg-black block mt-2`}></span>
            <span className={`w-8 h-0.5 transform ${showBargerMenu ? 'rotate-15' : ''} bg-black block mt-2`}></span>
        </motion.div>
    );
}

export default BargerMenu;
