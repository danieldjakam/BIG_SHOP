import React from 'react';

const CartReducer = (state, action) => {
    const {shoppingCart, totalPrice, qty} = state;
    let product;
    let index;
    let updatedPrice;
    let updatedQty;
    switch (action.type) {
        case 'ADD_TO_CART':
            const check = shoppingCart.find(product => product.id === action.id)
            if (check) {
                return state;
            }else{
                product = action.product;
                product['qty'] = 1;
                updatedQty = qty + 1;
                updatedPrice = totalPrice + product.price;
                return {shoppingCart: [product, ...shoppingCart], totalPrice: updatedPrice, qty: updatedQty}
            }
            break;
    
        default:
            return state
            break;
    }
};

export default CartReducer;