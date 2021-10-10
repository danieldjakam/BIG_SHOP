import React, { useContext } from 'react';
import { CartContext } from '../Global/CartContext';
const Cart = () => {
    const {shoppingCart, totalPrice, qty, dispatch} = useContext(CartContext)

    return (
        <div className="cart-container">
            <div className="cart-details">
                {shoppingCart.length > 0 
                 ? shoppingCart.map( cart => (
                     <div className="cart" key={cart.id}>
                        <span className="cart-image">
                            <img src={cart.image} alt={cart.name} title={cart.name} />
                        </span>
                        <span className="cart-product-name">
                            {cart.name}
                        </span>
                        <span className="cart-product-price">
                            ${cart.price}.00
                        </span>
                        <span className="inc">
                            <i className="fa fa-plus"></i>
                        </span>
                        <span className="product-quantity">
                            {cart.qty}
                        </span>
                        <span className="inc">
                            <i className="fa fa-minus"></i>
                        </span>
                        <span className="product-total-price">
                            $500.00
                        </span>
                        <span className="delete-product">
                            <i className="fa fa-trash"></i>
                        </span>
                     </div>
                 )
                 )
                 : 'Votre panier est actuellement vide'}
            </div>
        </div>
    );
};

export default Cart;