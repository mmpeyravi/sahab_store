import React from 'react';
import { Product } from '../types';

interface ProductDetailProps {
    product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => (
    <div className="container">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
    </div>
);

export default ProductDetail;
