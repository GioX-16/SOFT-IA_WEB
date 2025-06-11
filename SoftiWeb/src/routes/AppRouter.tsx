import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Header from "../Components/Header"; 


export default function() {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </BrowserRouter>
    )
}