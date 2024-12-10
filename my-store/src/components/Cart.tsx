import React, { useEffect, useState } from 'react';
import { CartProduct, Product } from '../types';

let products: Product[] = [];

const Cart: React.FC = () => {
    const [quantity, setQuantity] = useState(0);
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
    const [added, setAdded] = useState(false);
    const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

    useEffect(() => {
        setCartProducts(JSON.parse(localStorage.getItem('cartProducts') || '[]'));
    }, []);

    useEffect(() => {
        let qArr: { [key: number]: number } = {};
        cartProducts.forEach(cp => {
            qArr[cp.id] = cp.quantity;
        });
        setQuantities(qArr);
    }, [cartProducts]);

    const handleAdd = (id: number) => {
        cartAdd(1, id);
    }

    const handleSubtract = (id: number) => {
        cartAdd(-1, id);
    }

    const handleAddToCart = (id: number) => {
        setAdded(true);
        setQuantity(1);
        cartAdd(1, id);
    }

    const cartAdd = (change: number, id: number) => {
        const products = JSON.parse(localStorage.getItem('products') || '[]');
        let product = products.find((p: Product) => p.id === id);

        let cartProducts = JSON.parse(localStorage.getItem('cartProducts') || '[]');
        const existingProductIndex = cartProducts.findIndex((p: CartProduct) => p.id === product.id);

        if (existingProductIndex >= 0) {
            cartProducts[existingProductIndex].quantity += change;
            if (cartProducts[existingProductIndex].quantity === 0) {
                cartProducts.splice(existingProductIndex, 1);
            }
        } else {
            cartProducts.push({ ...product, quantity: 1 });
        }

        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
        setCartProducts(cartProducts); // بروز کردن state فوراً برای انعکاس تغییرات در UI
    }

    return (
        <div className="cart-product-list">
            {cartProducts.map(product => (
                <div key={product.id}>
                    <div className="product-card cart-product-card">
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <img style={{ display: product.image ? 'block' : 'none' }} className="photo"
                                 src={product.image}
                                 alt="Product Image" height="140" />
                            <h5 style={{ fontWeight: 'bolder' }}>{product.title}</h5>
                            <div style={{
                                fontWeight: 'bold',
                                position: 'relative',
                                borderRadius: '40px',
                                padding: '5px',
                                bottom: 0,
                                background: 'yellow',
                            }}>${product.price}</div>
                            <div className="quantity-control">
                                <button onClick={() => handleSubtract(product.id)} className="quantity-btn">-</button>
                                <span className="quantity">{quantities[product.id]}</span>
                                <button onClick={() => handleAdd(product.id)} className="quantity-btn">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cart;
