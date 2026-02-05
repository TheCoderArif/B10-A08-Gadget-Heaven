import {  useLoaderData } from "react-router-dom";
import {  getProductWishData } from "../../Utilities/Utilities";
import CartDisplay from "../CartDisplay/CartDisplay";

const WishList = () => {

    const productList = useLoaderData();
    const allData = [...productList.categories[0].products,...productList.categories[1].products, ...productList.categories[2].products]

    const wishList = getProductWishData();
    // console.log(cartList);

    const wishData = allData.filter(product => wishList.includes(product.product_id))


    return (
        <div>
            <div className="flex">
                <p className="  text-2xl font-bold">Wish List</p>
            </div>
            {
                wishData.map(data => <CartDisplay product={data} key={data.product_id}></CartDisplay>)
            }
        </div>
    );
};

export default WishList;