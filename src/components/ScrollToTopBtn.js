import React from 'react'
import { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';

export default function ScrollToTopBtn() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect (() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setShowTopBtn(true)
            } else {
                setShowTopBtn(false)
            }
            
        });
    },[]);

    const handlescrollToTOp = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        });

    }
  return (
        <>
                <div className='scrollBtmToTop'>
                    {   showTopBtn && (
                        <FaAngleUp className="arrow-position arrow-style" onClick={handlescrollToTOp} />
                    )}
                </div>
            
        </>
  )
}
