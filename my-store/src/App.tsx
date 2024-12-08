import Cart from './components/Cart';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react';

import Home from './components/Home'
import Layout from './components/Layout'

const App: React.FC = () => {


    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="cart" element={<Cart/>}/>
                    {/*<Route path="layout" element={<Layout />} />*/}
                    {/*<Route path="*" element={<NoPage />} />*/}
                </Route>
            </Routes>
        </BrowserRouter>

    )
        ;
}

export default App;
