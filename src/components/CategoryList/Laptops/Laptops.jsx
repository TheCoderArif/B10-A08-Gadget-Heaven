import { useLoaderData } from "react-router-dom";
import Product from "../../Product/Product";

const Laptops = () => {
    const datal = useLoaderData();
    const laptops = datal.categories[1].products
    // console.log(laptops);
    return (
        <div className="grid grid-cols-3">
            {
                laptops.map(laptop => <Product product={laptop} key={laptop.product_id}></Product>)
            }
        </div>
    );
};

export default Laptops;