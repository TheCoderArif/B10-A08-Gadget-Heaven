// import { useContext } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
// import { useLoaderData } from "react-router-dom";
import { CartWishContext } from "../Contexts/Contexts";
const Cart = () => {
    // const productList = useLoaderData();
    // const allProductsList = [...productList.categories[0].products,...productList.categories[1].products, ...productList.categories[2].products]

    // const [cart, setCart, wishList, setWishList] = useContext(CartWishContext)

    // const cartData = allProductsList.filter(product => product.product_id === cart)
    return (
        <div>
            <div className="flex justify-between">
                <div>
                    <h3 className="text-2xl font-bold">Cart</h3>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <h3 className="text-2xl font-bold">Total Cost: </h3>
                    <button className=" mt-1.5 btn btn-outline btn-error btn-sm rounded-2xl">Sort Price <GiSettingsKnobs></GiSettingsKnobs></button>
                    <button className=" mt-1.5 btn btn-outlinee btn-secondary btn-sm rounded-2xl">Purchase</button>

                </div>
            </div>
        </div>
    );
};

export default Cart;