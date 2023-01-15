import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../feature/cartSlice";
import { fetchProducts } from "../feature/productSlice";
import { STATUS } from "../feature/productSlice";

const Products = () => {
    const { data: products, status } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const handleAdd = (product) => {
        dispatch(addItem(product));
    };

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    if (status === STATUS.LOADING) {
        return <h1>Loading...</h1>;
    }

    if (status === STATUS.ERROR) {
        return <h1>Something went wrong</h1>;
    }

    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Products;
