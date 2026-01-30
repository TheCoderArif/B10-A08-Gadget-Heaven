import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import {  useState } from "react";
import { PositionContext } from "../Contexts/Contexts";


const Root = () => {

    const [position, setPosition] = useState('home')


    return (
        <div>

            <PositionContext.Provider value={[position, setPosition]}>

            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>

            </PositionContext.Provider>

            


        </div>
    );
};

export default Root;