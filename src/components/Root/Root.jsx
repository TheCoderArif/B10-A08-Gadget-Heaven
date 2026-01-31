import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import {  useState } from "react";
import { CartWishContext, PositionContext } from "../Contexts/Contexts";


const Root = () => {

    const [position, setPosition] = useState('home')

    const [cart, setCart] = useState([]);
    const [wishList, setWishList] = useState([]);


    return (
        <div>

            <PositionContext.Provider value={[position, setPosition]}>
            <CartWishContext.Provider value={[cart, setCart, wishList, setWishList]}>

            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>

            </CartWishContext.Provider>
            </PositionContext.Provider>

            


        </div>
    );
};

export default Root;