import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import About from "./About";
import Devs from "./Devs";
import CaseStudies from "./CaseStudies"
import HowToUse from "./HowToUse";

export default function Nav()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/Developers" element={<Devs />} />
                <Route path="/HowToUse" element={<HowToUse />} />
                <Route path="/CaseStudies" element={<CaseStudies />} />
           </Routes>
        </BrowserRouter>
    )
}