import React from 'react';

const Cart = (props) => {
    let totalPopulation =0;
    const cart = props.cart;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        totalPopulation += country.population;
        
    }
    return (
        <div>
            <h4>Population: {totalPopulation}</h4>
        </div>
    );
};

export default Cart;