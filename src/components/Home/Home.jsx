import React from 'react'
import "../../styles/Home.css";
import HomeProducts from './HomeProducts';
import TopContent from './TopContent';
import HighlightedFeatures from './HighlightedFeatures';

function Home() {
    return (
        <div className='home'>
            <TopContent />
            <HomeProducts />
            <HighlightedFeatures />
        </div>
    )
}

export default Home