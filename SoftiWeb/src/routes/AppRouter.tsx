import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from '../Pages/Landing';
import About from '../Pages/About';
import Header from "../Components/Header"; 


export default function() {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </BrowserRouter>
    )
}