import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Filter from './components/Filter';
import Cart from './components/Cart';
import {Product} from './types';

const App: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [cart, setCart] = useState<Product[]>([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response.data)
                setProducts(response.data);
                setFilteredProducts(response.data);
            });
    }, []);

    const handleFilter = (criteria: any) => {


        setFilteredProducts(filteredProducts);
    };

    const handleAddToCart = (product: Product) => {
        setCart([...cart, product]);
    };

    return (
        <div className="my-app">
            <Filter onFilter={handleFilter}/>
            <ProductList products={filteredProducts} onSelect={setSelectedProduct}/>
            {selectedProduct && <ProductDetail product={selectedProduct}/>}
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <div className="floating-container">
                <div className="floating-button">+</div>
                <div className="element-container">

                    <a href="google.com"> <span className="float-element tooltip-left"><i
                        className="material-icons">phone</i></span></a>

                    <span className="float-element"><i className="material-icons">email</i></span>
                    <span className="float-element"><i className="material-icons">chat</i></span>
                </div>
            </div>

            <Cart products={cart}/>
        </div>
    )
        ;
}

export default App;
