import React from 'react'
import "../../styles/Home.css";
import HomeProducts from './HomeProducts';
import TopContent from './TopContent';

function Home() {
    return (
        <div className='home'>
            <TopContent />
            <HomeProducts />

        </div>
    )
}

export default Home