import React from "react";
import {Link, Outlet} from "react-router-dom";
interface LayoutProps {
}
const Layout: React.FC<LayoutProps> = () => {


    return (
        <div className="my-app">
            <Outlet/>

            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <div className="floating-container">
                <Link to="/cart">
                    <div className="floating-button">+</div>
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