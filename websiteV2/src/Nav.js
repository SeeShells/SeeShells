import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import About from "./About";
import Devs from "./Devs";

export default function Nav()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/Developers" element={<Devs />}/>
           </Routes>
        </BrowserRouter>
    )
}