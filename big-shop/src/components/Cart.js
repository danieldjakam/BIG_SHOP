import React, { useContext } from 'react';
import { CartContext } from '../Global/CartContext';
const Cart = () => {
    const data = useContext(CartContext);
    console.log(data)

    return (
        <div className="container">
            <div className="cat-container" style={{marginTop: '100px'}}>
                <h2>Carte d'achat</h2>
            </div>
        </div>
    );
};

export default Cart;