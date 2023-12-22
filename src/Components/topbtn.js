import React, { useState, useEffect } from 'react';
import upArrow from "../Images/up_arrow.svg"

export default function TopBtn() {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100); // Adjust the value based on when you want the button to appear
    };
  
    // Attach the scroll event listener when the component mounts
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    // Create a function to scroll to the top
    function scrollToTop(){
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
    
    return (
      <div>
        {isVisible && (
          <button onClick={scrollToTop} className="scroll-to-top-button">
            <img className='uparrow' src={upArrow} alt="" />
          </button>
        )}
      </div>
    );
}
