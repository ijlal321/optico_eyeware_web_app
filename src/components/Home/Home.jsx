import React from 'react'
import "../../styles/Home.css";
import HomeProducts from './HomeProducts';
import TopContent from './TopContent';
import HighlightedFeatures from './HighlightedFeatures';
import LogoSection from './LogoSection';

function Home() {
    return (
        <div className='home'>
            <TopContent />
            <HomeProducts />
            <HighlightedFeatures />
            <LogoSection />
        </div>
    )
}

export default Home