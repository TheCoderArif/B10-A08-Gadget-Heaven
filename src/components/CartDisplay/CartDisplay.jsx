import { RxCross2 } from "react-icons/rx";
import { getProductCartData,  } from "../../Utilities/Utilities";


const CartDisplay = ({product}) => {

    const {product_image, product_title, description, product_id} = product;

    const handleCartData = id => {
        const previousData = getProductCartData();
        const updatedData = previousData.filter(item => item !== id)
        const stringified = JSON.stringify(updatedData)
        

        localStorage.setItem('Product-Cart', stringified)
    }
    
    return (
        <>
        


     <div className="my-2 card card-side bg-base-100 shadow-sm">
  <figure>
    <img className="max-h-20 rounded-xl"
      src={product_image}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product_title}</h2>
    <h2 className="card-title font-light text-sm">{description}</h2>
    
    <div className="card-actions justify-end items-center justify-center">
        <button className="btn rounded-full" onClick={() => handleCartData(product_id)}><RxCross2></RxCross2></button>
    </div>
  </div>
</div>




        </>
    );
};

export default CartDisplay;