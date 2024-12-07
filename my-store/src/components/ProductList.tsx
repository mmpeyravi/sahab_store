import React from 'react';
import { Product } from '../types';

interface ProductListProps {
    products: Product[];
    onSelect: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onSelect }) => (
    <div className="product-list">
        {products.map(product => (
            <div className="product-card" key={product.title} onClick={() => onSelect(product)}>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
            </div>
        ))}
    </div>
);

export default ProductList;
