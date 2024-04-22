import React from 'react';
import Navbar from "../component/Navbar.jsx";
import {Toaster} from "react-hot-toast";


const MasterLayout = (props) => {
    return (
        <div className="row">

            <div className="col-md-2  sideBar">
                <Navbar/>
            </div>
            <div className="col-md-10 MainBar">
                {props.children}
            </div>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default MasterLayout;