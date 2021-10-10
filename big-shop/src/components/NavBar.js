import React from 'react';

const NavBar = (props) => {
    return (
        <div>
            <nav>
                <ul className="left">
                    <li><a href="#">{props.site_name}</a></li>
                </ul>
                <ul className="right">
                    <li className="">
                        <a href="#">
                            <span className="shoppingCart">
                                <i className="fa fa-cart-plus"></i>
                                <span className="cartCount">
                                    0
                                </span>
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;