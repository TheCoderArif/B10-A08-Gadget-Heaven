import { useLoaderData } from "react-router-dom";
import Product from "../../Product/Product";


const Accessories = () => {
    const dataa = useLoaderData();
    const accessories = dataa.categories[2].products
    console.log(accessories);
    return (
        <div className="grid grid-cols-3">
            {
                accessories.map(accessory => <Product product={accessory} ></Product>)
            }
        </div>
    );
};

export default Accessories;