import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import './styles.css';
import Cart from './components/Cart';
import {Product} from "./types";
import axios from "axios";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import App from "./App";
// import Home from './pages/Home';
// import Blogs from './pages/Blogs';
// import Contact from './pages/Contact';
// import NoPage from './pages/NoPage';

// مشخص کردن نوع Props در صورت لزوم




interface BlogsProps {
}

interface ContactProps {
}

interface NoPageProps {
}



// const Blogs: React.FC<BlogsProps> = () => {/* پیاده‌سازی کامپوننت Blogs */}
// const Contact: React.FC<ContactProps> = () => {/* پیاده‌سازی کامپوننت Contact */}
// const NoPage: React.FC<NoPageProps> = () => {/* پیاده‌سازی کامپوننت NoPage */}

/*const App: React.FC = () => {
    return (

    );
};*/

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
