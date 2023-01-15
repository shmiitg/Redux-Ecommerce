import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const items = useSelector((state) => state.cart.items);

    return (
        <div className="navbar-container">
            <span className="logo">REDUX STORE</span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                <span className="cartCount">Cart items: {items && items.length}</span>
            </div>
        </div>
    );
};

export default Navbar;
