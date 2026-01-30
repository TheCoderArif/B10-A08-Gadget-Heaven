import { useParams } from "react-router-dom";

const ProductDetails = () => {

    const {productId} = useParams();
    console.log(productId);
    
    return (
        <div>
            Product Details.
        </div>
    );
};

export default ProductDetails;