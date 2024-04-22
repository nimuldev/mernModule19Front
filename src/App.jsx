import React from 'react';
import CreateFood from "./pages/CreateFood.jsx";
import AllFood from "./pages/AllFood.jsx";
import UpdateFood from "./pages/UpdateFood.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <div>

            <BrowserRouter>
                <Routes>
                    <Route path="/create" element={<CreateFood/>}/>
                    <Route path="/update/:id" element={<UpdateFood/>}/>
                    <Route path="/" element={<AllFood/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;