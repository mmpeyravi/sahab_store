import React, {useState} from "react";
import {Link, Outlet} from "react-router-dom";
import {Product} from "../types";
interface LayoutProps {
}
const Layout: React.FC<LayoutProps> = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);


    return (
        <div className="my-app">
            <img style={{marginTop: '10px'}} src={require('../../src/icons/sahab store logo.png')} width={250}/>

            <Outlet />

            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <div className="floating-container">
                <Link to="/cart">
                    <div className="floating-button">
                        <img style={{ marginTop: '10px'}} src={require('../../src/icons/icons8-cart-94.png')} width={40} />
                    </div>
                </Link>
                {/*<div className="element-container">

                    <a href="google.com"> <span className="float-element tooltip-left"><i
                        className="material-icons">phone</i></span></a>

                    <span className="float-element"><i className="material-icons">email</i></span>
                    <span className="float-element"><i className="material-icons">chat</i></span>
                </div>*/}
            </div>
        </div>
    )
        ;
}

export default Layout;