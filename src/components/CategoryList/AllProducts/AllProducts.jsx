import { useLoaderData } from "react-router-dom";
import Product from "../../Product/Product";

const AllProducts = () => {
    const productList = useLoaderData();
    const allProductsList = [...productList.categories[0].products,...productList.categories[1].products, ...productList.categories[2].products]

    // console.log(allProductsList);



    return (
        <div>

            <div className="grid grid-cols-3">
                {
                allProductsList.map(product => <Product product={product} key={product.product_id}></Product>)
                }
            </div>
            
        </div>
    );
};

export default AllProducts;