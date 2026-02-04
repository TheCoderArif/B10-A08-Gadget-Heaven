import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    const [cartD, setSartD] = useState('cartD');


    return (
        <div className="max-w-5xl mx-auto">
         <div className="bg-violet-500 text-white pt-2.5 pb-3 ">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
        </p>
        <div className="pt-2.5">
          <NavLink to='/dashboard/'>
            <button onClick={() => setSartD('cartD')} className={`btn btn-outline btn-sm rounded-3xl px-7 mx-2.5 ${cartD === 'cartD' && 'bg-white text-violet-600'}`}>Cart</button>
          </NavLink>
          <NavLink to='/dashboard/wishlist'>
            <button onClick={() => setSartD('wishlistD')} className={`btn btn-outline btn-sm rounded-3xl px-7 mx-2.5 ${cartD === 'wishlistD' && 'bg-white text-violet-600'}`}>Wishlist</button>
          </NavLink>
          {/* <button className="btn btn-outline">Default</button> */}
        </div>
      </div>
      <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;