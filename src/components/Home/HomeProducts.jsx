import React from 'react';
import '../../styles/HomeProducts.css';
import Product from '../Product';
import { BlueSmall, BlackLarge, GreySmall } from '../Headings';


const HomeProducts = () => {
    return (
        <div className='home-products'>
            <div className='text-area'>
                <BlueSmall text="A Brush of Perfection" />
                <BlackLarge text="Add a Flavor to Being a Girl" />
                <GreySmall text="Lorem ipsum dolor sit amet, consectetur." />
            </div>
            <div className='products-area'>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
}

export default HomeProducts;
