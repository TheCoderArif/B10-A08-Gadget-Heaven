import { useLoaderData } from "react-router-dom";
import Product from "../../Product/Product";

const Phones = () => {
    const datap = useLoaderData();
    const phones = datap.categories[0].products
    return (
        <div className="grid grid-cols-3">
            {
                phones.map(phone => <Product product={phone} key={phone.product_id}></Product>)
            }
        </div>
    );
};

export default Phones;