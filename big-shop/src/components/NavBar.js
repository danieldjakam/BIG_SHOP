import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
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
                                    0
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