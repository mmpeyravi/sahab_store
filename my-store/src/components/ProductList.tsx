import React from 'react';
import { Product } from '../types';

interface ProductListProps {
    products: Product[];
    onSelect: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onSelect }) => (
    <div>
        {products.map(product => (
            <div key={product.id} onClick={() => onSelect(product)}>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
            </div>
        ))}
    </div>
);

export default ProductList;
