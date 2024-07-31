import React from 'react';
import '../../styles/HighlightedFeatures.css';
import BlueButton from "../Buttons/BlueButton.jsx";
import { BlueSmall, BlackLarge, GreySmall } from '../Headings'; // Adjust the path as necessary
import saleSVG from "../../assets/images/sale.svg";
import guaranteeSVG from "../../assets/images/guarantee.svg";
import shippingSVG from "../../assets/images/shipping.svg";

const HighlightedFeatures = () => {
    return (
        <div className='highlighted-features'>
            <div className='img-section'>
                <div className='left'>

                </div>
                <div className='right'>
                    <BlueSmall text="Be Bold, Be Daring" />
                    <BlackLarge text="A Whole New Look" />
                    <GreySmall text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
                    <BlueButton />
                </div>
            </div>
            <div className='features-section'>
                <div className='feature sale'>
                    <img src={saleSVG} height="70px" alt='sale' />
                    <BlackLarge text="Season Sale" />
                    <GreySmall text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis." />
                </div>
                <div className='feature shipping'>
                    <img src={shippingSVG} height="70px" alt='shipping' />
                    <BlackLarge text="Season Sale" />
                    <GreySmall text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis." />
                </div>
                <div className='feature guarantee'>
                    <img src={guaranteeSVG} height="70px" alt='guarantee' />
                    <BlackLarge text="Season Sale" />
                    <GreySmall text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis." />
                </div>
            </div>
        </div>
    );
}

export default HighlightedFeatures;