import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from '../Pages/Landing';
/* import Header from "../Components/Header";  */


export default function() {
    return (
        <BrowserRouter>
        {/* <Header /> */}
        <Routes>
            <Route path="/" element={<Landing />} />
        </Routes>
        </BrowserRouter>
    )
}