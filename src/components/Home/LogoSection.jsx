// src/components/LogoSection.js
import React, { useEffect, useState } from 'react';
import '../../styles/LogoSection.css'; // Import CSS file for carousel styles

// Import SVG files
import logo1 from '../../assets/images/sale.svg';
import logo2 from '../../assets/images/sale.svg';
import logo3 from '../../assets/images/sale.svg';
import logo4 from '../../assets/images/sale.svg';
import logo5 from '../../assets/images/sale.svg';

// const logos = [logo1, logo2, logo3, logo4, logo5];

const LogoSection = () => {
    const nr_items_per_screen = 1;
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        logo1, 
        logo2, 
        logo3,
        logo4,
        logo5,
        logo1,
        logo1
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % (items.length - nr_items_per_screen + 1));
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [items.length]);

    return (
        <div className="banner-container">
            <div className="banner"
            style={{ transform: `translateX(-${currentIndex * 100/nr_items_per_screen}%)` }}
            >
                {items.map((item, index) => (
                    <div key={index} className="banner-item" style={{ flex: `0 0 ${100 / nr_items_per_screen}%` }}>
                        <img src={item} alt={`Banner item ${index}`}
                            width="100px" />
                        {index} --
                        {currentIndex}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default LogoSection;
