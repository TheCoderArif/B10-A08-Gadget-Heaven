import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const ItemSection = () => {

    const [allProducts, setAllProducts] = useState(true);
    const [laptops, setLaptops] = useState(false);
    const [phones, setPhones] = useState(false);
    const [accessories, setAccessories] = useState(false);
    const [smartWatches, setSmartWatches] = useState(false);
    const [macbooks, setMacbooks] = useState(false);
    const [iphones, setIphones] = useState(false);

    const handleAllProducts = () => {
        setAllProducts(true);
        setLaptops(false);
        setPhones(false);
        setAccessories(false);
        setSmartWatches(false);
        setMacbooks(false);
        setIphones(false);
    }
    const handleLaptops = () => {
        setAllProducts(false);
        setLaptops(true);
        setPhones(false);
        setAccessories(false);
        setSmartWatches(false);
        setMacbooks(false);
        setIphones(false);
    }
    const handlePhones = () => {
        setAllProducts(false);
        setLaptops(false);
        setPhones(true);
        setAccessories(false);
        setSmartWatches(false);
        setMacbooks(false);
        setIphones(false);
    }
    const handleAccessories = () => {
        setAllProducts(false);
        setLaptops(false);
        setPhones(false);
        setAccessories(true);
        setSmartWatches(false);
        setMacbooks(false);
        setIphones(false);
    }
    const handleSmartWatches = () => {
        setAllProducts(false);
        setLaptops(false);
        setPhones(false);
        setAccessories(false);
        setSmartWatches(true);
        setMacbooks(false);
        setIphones(false);
    }
    const handleMacbooks = () => {
        setAllProducts(false);
        setLaptops(false);
        setPhones(false);
        setAccessories(false);
        setSmartWatches(false);
        setMacbooks(true);
        setIphones(false);
    }
    const handleIphones = () => {
        setAllProducts(false);
        setLaptops(false);
        setPhones(false);
        setAccessories(false);
        setSmartWatches(false);
        setMacbooks(false);
        setIphones(true);
    }
    
    return (
        <div>
            <p className="font-bold text-2xl py-3">Explore Cutting-Edge Gadgets</p>
            <div className="grid grid-cols-4">
                <div>
                    <section className="border flex flex-col gap-1 items-center"> 
                        {/* <button className="btn btn-sm w-40 bg-violet-500 text-white">All Products</button> */}
                        {/* <button className={allProducts? ''}>All Products</button> */}

                       <NavLink to='/'> <button className={`btn btn-sm w-40 ${allProducts && 'bg-violet-500 text-white'}`} onClick={handleAllProducts}>All Products</button></NavLink>

                        <NavLink to='/home/laptops'> <button className={`btn btn-sm w-40 ${laptops && 'bg-violet-500 text-white'}`} onClick={handleLaptops}>Laptops</button> </NavLink>

                        <NavLink to='/home/phones'>  <button className={`btn btn-sm w-40 ${phones && 'bg-violet-500 text-white'}`} onClick={handlePhones}>Phones</button> </NavLink>

                        <NavLink to='/home/accessories'> <button className={`btn btn-sm w-40 ${accessories && 'bg-violet-500 text-white'}`} onClick={handleAccessories}>Accessories</button> </NavLink>

                        <NavLink to='/home/smartwatches'> <button className={`btn btn-sm w-40 ${smartWatches && 'bg-violet-500 text-white'}`} onClick={handleSmartWatches}>Smart Watches</button> </NavLink>

                        <NavLink to='/home/macbooks'> <button className={`btn btn-sm w-40 ${macbooks && 'bg-violet-500 text-white'}`} onClick={handleMacbooks}>Macbooks</button> </NavLink>

                        <NavLink to='/home/iphones'> <button className={`btn btn-sm w-40 ${iphones && 'bg-violet-500 text-white'}`} onClick={handleIphones}>Iphones</button> </NavLink>

                    </section>
                </div>
                <div className="border col-span-3"> 

                    <Outlet></Outlet>

                </div>
            </div>
        </div>
    );
};

export default ItemSection;