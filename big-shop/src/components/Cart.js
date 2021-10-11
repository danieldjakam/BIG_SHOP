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
                        <span className="inc"
                        onClick={() => dispatch({
                                type: 'INC',
                                id: cart.id,
                                cart
                        })}>
                            <i className="fa fa-plus"></i>
                        </span>
                        <span className="product-quantity">
                            {cart.qty}
                        </span>
                        <span className="dec"
                        onClick={() => dispatch({
                                type: 'DEC',
                                id: cart.id,
                                cart
                        })}>
                            <i className="fa fa-minus"></i>
                        </span>
                        <span className="product-total-price">
                            ${cart.price * cart.qty}.00
                        </span>
                        <span className="delete-product"
                        onClick={() => dispatch({
                                type: 'DELETE',
                                id: cart.id,
                                cart
                        })}>
                            <i className="fa fa-trash"></i>
                        </span>
                     </div>
                 )
                 )
                 : <h3 align="center">Votre panier est actuellement vide </h3>}
            </div>
            {
                shoppingCart.length > 0 
                    ?
                        <div className="cart-summary">
                            <div className="summary">
                                <h3>Somme du chariot</h3>
                                <div className="total-items">
                                    <div className="items">
                                        Produits
                                    </div>
                                    <div className="items-count">
                                        {qty}
                                    </div>
                                </div>
                                <div className="total-price-section">
                                    <div className="just-title">
                                        Prix total
                                    </div>
                                    <div className="items-price">
                                        ${totalPrice}.00
                                    </div>
                                </div>
                                <div className="stripe-section">
                                    {/*stripe button */}
                                </div>
                            </div>
                        </div>
                    : ''

            }
        </div>
    );
};

export default Cart;