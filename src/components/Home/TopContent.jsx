import React from 'react';
import '../../styles/TopContent.css';
import WhiteButton from '../Buttons/WhiteButton';

const TopContent = () => {
    return (
        <div className='top-content-container'>
        <div class="home-content">


            <h5>A Whole New Look</h5>
            <h1>Beauty Pronounced</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>

            <WhiteButton />
        </div>
    </div>
    );
}

export default TopContent;