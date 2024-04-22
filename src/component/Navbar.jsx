import React, {useState} from 'react';
import logo from "../assets/image/Logo.png"
import {NavLink} from "react-router-dom";


const Navbar = () => {
    const [activeItem, setActiveItem] = useState('allFood');

    const handleMenuItemClick = (item) => {
        setActiveItem(item);


    };

    return (
        <div >

            <div className="pb-lg-5  px-3">
<img src={logo}/>
            </div>
            <ul className="menu">
                <li  className="py-2 px-3">Menu</li>
                <li><NavLink className="nav-link py-2 px-3  rounded-1" to="/create" onClick={() => handleMenuItemClick('allFood')}>  <i className="bi bi-journal-bookmark-fill menuIcon"></i> Create
                    Food</NavLink></li>
                <li><NavLink className="nav-link py-2 px-3 rounded-1" to="/"  onClick={() => handleMenuItemClick('createFood')}><i className="bi bi-cart-dash-fill menuIcon"></i> All Foods</NavLink></li>

            </ul>
        </div>
    );
};

export default Navbar;