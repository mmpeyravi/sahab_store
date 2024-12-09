import Cart from './components/Cart';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react';

import Home from './components/Home'
import Layout from './components/Layout'
import ProductDetail from "./components/ProductDetail";
import {Product} from "./types";

const App: React.FC = () => {

let product:Product
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="cart" element={<Cart/>}/>
                    <Route path="product/:id" element={<ProductDetail/>} />
                    {/*<Route path="*" element={<NoPage />} />*/}
                </Route>
            </Routes>
        </BrowserRouter>

    )
        ;
}

export default App;
