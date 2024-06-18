import {Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import About from "./About"
import Shop from "./Shop"
import CartDetaild from "./CartDetaild"
import GoToPayment from "./GoToPayment"

export default function Navigators() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/products" element={<Shop />} />
                <Route exact path="/my_cart" element={<CartDetaild/>} />
                <Route exact path="/payment" element={<GoToPayment />} />
            </Routes>
        </>
    );
};

