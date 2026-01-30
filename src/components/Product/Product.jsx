import { useContext } from "react";
import { Link } from "react-router-dom";
import { PositionContext } from "../Contexts/Contexts";

const Product = ({ product }) => {
  const [position, setPosition] = useContext(PositionContext)
  const {product_id, product_title, product_image, price } = product;
  // console.log(product);
  return (
    <div>
      <div className="card bg-base-100 w-full shadow-sm">
        <figure>
          <img
            src={product_image}
            alt={product_title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{product_title}</h2>
          <h3 className="w-max text-gray-700">Price: ${price}</h3>
          <div className="card-actions ">
            <Link to={`/products/${product_id}`}>
              <button onClick={() => setPosition('others')} className="btn btn-outline btn-primary" >View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
