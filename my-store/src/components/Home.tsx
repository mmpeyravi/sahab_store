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
            });
    }, []);

    const handleFilter = (criteria: any) => {


        setFilteredProducts(filteredProducts);
    };

    const handleAddToCart = (product: Product) => {
        setCart([...cart, product]);
    };
    return (
        <><Filter onFilter={handleFilter}/><ProductList products={filteredProducts} onSelect={setSelectedProduct}/></>
    )
}

export default Home;