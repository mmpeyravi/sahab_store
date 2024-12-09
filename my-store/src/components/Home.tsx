import React, {useEffect, useState} from "react";
import {Product} from "../types";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Filter from "./Filter";
import ProductList from "./ProductList";
interface HomeProps {
}
const Home: React.FC<HomeProps> = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [cart, setCart] = useState<Product[]>([]);


    const navigate = useNavigate()
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response.data)
                setProducts(response.data);
                setFilteredProducts(response.data);
                localStorage.setItem('products', JSON.stringify(response.data));
            });
    }, []);

    const handleFilter = (criteria: any) => {
        let filtered = products;
        if (criteria.name) {
            filtered = filtered.filter(product => product.title.toLowerCase().includes(criteria.name.toLowerCase()));
        }
        if (criteria.category) {
            filtered = filtered.filter(product => product.category.toLowerCase() === criteria.category.toLowerCase());
        }
        if (criteria.minPrice) {
            filtered = filtered.filter(product => product.price >= parseFloat(criteria.minPrice));
        }
        if (criteria.maxPrice) {
            filtered = filtered.filter(product => product.price <= parseFloat(criteria.maxPrice));
        }
        if (criteria.sort === 'asc') {
            filtered = filtered.sort((a, b) => a.price - b.price);
        } else if (criteria.sort === 'desc') {
            filtered = filtered.sort((a, b) => b.price - a.price);
        }
        setFilteredProducts(filtered);
    }


    const handleAddToCart = (product: Product) => {
        setCart([...cart, product]);
    };
    return (
        <>
            <Filter onFilter={handleFilter}/>
            <ProductList products={filteredProducts} onSelect={setSelectedProduct}/>
        </>
    )
}

export default Home;