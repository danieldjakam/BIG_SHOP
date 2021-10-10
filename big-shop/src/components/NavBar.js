import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Global/CartContext';

const NavBar = (props) => {
    const {qty} = useContext(CartContext)
    return (
        <div>
            <nav>
                <ul className="left">
                    <li><Link to="/">{props.site_name}</Link></li>
                </ul>
                <ul className="right">
                    <li className="">
                        <Link to="/cart">
                            <span className="shoppingCart">
                                <i className="fa fa-cart-plus"></i>
                                <span className="cartCount">
                                    {qty}
                                </span>
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;