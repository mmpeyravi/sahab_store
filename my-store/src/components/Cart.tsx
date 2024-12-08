import React, {useEffect} from 'react';
import { Product } from '../types';
import axios from "axios";

// interface CartProps {
//     products: Product[];
// }
let products: Product[]=[]

const Cart: React.FC = () => {
    useEffect(() => {
        console.log('hoihguvgcgh')
    }, []);
    return(
        <div>
            <h2>سبد خرید</h2>
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    )
}

export default Cart;
