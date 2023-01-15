import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../feature/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart.items);
    const handleRemove = (id) => {
        dispatch(removeItem(id));
    };

    return (
        <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
                {products &&
                    products.map((product, index) => (
                        <div key={index} className="cartCard">
                            <img src={product.image} alt="" />
                            <h5>{product.title}</h5>
                            <h5>{product.price}</h5>
                            <button className="btn" onClick={() => handleRemove(product.id)}>
                                Remove
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Cart;
