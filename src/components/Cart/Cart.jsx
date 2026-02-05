// import { useContext } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
// import { useLoaderData } from "react-router-dom";
import { CartWishContext } from "../Contexts/Contexts";
import { useLoaderData } from "react-router-dom";
import { getProductCartData } from "../../Utilities/Utilities";
import CartDisplay from "../CartDisplay/CartDisplay";
// import { useStackId } from "recharts/types/cartesian/BarStack";
import { useState } from "react";
const Cart = () => {

     
    // const productList = useLoaderData();
    // const allProductsList = [...productList.categories[0].products,...productList.categories[1].products, ...productList.categories[2].products]

    // const [cart, setCart, wishList, setWishList] = useContext(CartWishContext)

    // const cartData = allProductsList.filter(product => product.product_id === cart)
    const productList = useLoaderData();
    const allData = [...productList.categories[0].products,...productList.categories[1].products, ...productList.categories[2].products]

    const cartList = getProductCartData();
    // console.log(cartList);

    const cartData = allData.filter(product => cartList.includes(product.product_id))
    // console.log(cartData);

    const [price, setPrice] = useState(0);

    // for ( const pro of cartData ){
    //     const newPrice = price + pro.product.price;
    //     setPrice(newPrice);
    // }
    // console.log(setPrice);

    // const pricee = [];
    // cartData.map(data => pricee.push(data.price))

    // // console.log(pricee);

    // for(const p of pricee ) {
    //     setPrice(price + p)
    // }

    return (
        <div>
            <div className="flex justify-between">
                <div>
                    <h3 className="text-2xl font-bold">Cart</h3>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <h3 className="text-2xl font-bold">Total Cost: {price} </h3>
                    <button className=" mt-1.5 btn btn-outline btn-error btn-sm rounded-2xl">Sort Price <GiSettingsKnobs></GiSettingsKnobs></button>
                    <button className=" mt-1.5 btn btn-outlinee btn-secondary btn-sm rounded-2xl">Purchase</button>

                    

                </div>
            </div>
                <div>
                    {
                        cartData.map(product =>   <CartDisplay cartData={cartData} price={price} setPrice={setPrice} product={product} key={product.product_id}></CartDisplay>  )
                    }
                    

                </div>

        </div>
    );
};

export default Cart;