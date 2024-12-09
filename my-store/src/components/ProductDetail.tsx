import React, {useState} from 'react';
import {Product} from '../types';
import {useParams} from "react-router-dom";

interface ProductDetailProps {
    product: Product;
}

const ProductDetail: React.FC = () => {
    const [quantity, setQuantity] = useState(0);
    const [added, setAdded] = useState(false);
    const handleAdd = () => setQuantity(quantity + 1);
    const handleSubtract = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

    const handleAddToCart = () => {
        setAdded(true);
        setQuantity(1);
    };

    const {id} = useParams<{ id: string }>();
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    let product = {
        title: undefined,
        description: undefined,
        price: undefined,
        image: undefined
    }
    if (id != null) {
        product = products.find((p: Product) => p.id === parseInt(id));
    }

    return (
        <div className="my-app">
            <div className="product-list detail">
                <div style={{display:'flex',flexDirection:'row'}}>
                    <img src={product.image} style={{height:'300px'}}/>
                    <div >
                        <h2>{product.title}</h2>
                        <p style={{
                            bottom: '150px',
                            right: '10px',
                            fontStyle: 'bold'
                        }}>${product.price}</p>
                        <div className="add-to-cart"> {added ? (<div className="quantity-control">
                            <button onClick={handleSubtract} className="quantity-btn">-</button>
                            <span className="quantity">{quantity}</span>
                            <button onClick={handleAdd} className="quantity-btn">+</button>
                        </div>) : (
                            <button onClick={handleAddToCart} className="add-btn">افزودن به سبد خرید</button>)} </div>
                    </div>

                </div>
                <p>{product.description}</p>
                <div style={{flex: 1, display: 'flex', flexDirection: 'column', width: '80%'}}>



                </div>
            </div>

        </div>
    )

}

export default ProductDetail;
