import React from 'react';
import '../../styles/HomeProducts.css';
import Product from '../Product';

const HomeProducts = () => {
    return (
        <div className='home-products'>
            <div className='text-area'>
                <h5>A Brush of Perfection</h5>
                <h2>Add a Flavor to Being a Girl</h2>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <Product />
        </div>
    );
}

export default HomeProducts;
