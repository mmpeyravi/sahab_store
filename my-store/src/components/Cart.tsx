import React from 'react';
import { Product } from '../types';

interface CartProps {
    products: Product[];
}

const Cart: React.FC<CartProps> = ({ products }) => (
    <div>
        <h2>سبد خرید</h2>
        {products.map(product => (
            <div key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
            </div>
        ))}
    </div>
);

export default Cart;
