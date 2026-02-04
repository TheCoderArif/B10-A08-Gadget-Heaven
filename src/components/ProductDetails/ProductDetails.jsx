// import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { CartWishContext } from "../Contexts/Contexts";
import { setProductCartData, setProductWishData } from "../../Utilities/Utilities";

const ProductDetails = () => {
  // const [prdct, setPrdct] = useState([]);

  const [cart, setCart, wishList, setWishList] = useContext(CartWishContext)

  const handleCart = id => {

    setProductCartData(id)

    if (cart.includes(id)) {
      console.log('.')
    }
    else {

      const newCart = [...cart, id]
      setCart(newCart);
    }
  }
  const handleWishList = id => {

    setProductWishData(id)

    if (wishList.includes(id)) {
      console.log('.')
    }
    else {

      const newWishList = [...wishList, id]
      setWishList(newWishList);
    }
  }

  const { productId } = useParams();
  // const pId = parseInt(productId);

  const listForDetails = useLoaderData();
  // console.log(productList.categories[1].products);
  const listDetails = [
    ...listForDetails.categories[0].products,
    ...listForDetails.categories[1].products,
    ...listForDetails.categories[2].products,
  ];

  // console.log(listDetails);
  // listDetails.map(prod => setPrdct(prod));

  // prdOne = prdct.find(p => p.product_id === pId);

  const productDetailed = listDetails.find(
    (product) => product.product_id === productId,
  );

  const {
    product_id ,
    availability,
    product_title,
    product_image,
    
    price,
    description,
    Specification,
    rating,
  } = productDetailed;
  console.log(productDetailed);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-violet-500 text-white pt-2.5 pb-35">
        <h1 className="text-2xl font-bold">Product Details</h1>
        <p className="text-sm">
          Explore the latest gadget that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, We have
          it all.
        </p>
      </div>

      <div className="w-2/3 mx-auto ">
        <div className="hero bg-base-200 p-4 -mt-30  rounded-2xl">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={product_image}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div className="flex flex-col items-start">
              <h1 className="text-3xl font-bold py-1.5">{product_title}</h1>
              <h2 className="text-xl font-bold py-1.5">Price: ${price}</h2>
              {availability && (
                <button className="btn btn-xs mb-2 btn-outline btn-success bg-gray-100 text-green-500">
                  In Stock
                </button>
              )}
              <h3 className="text-sm text-gray-500 my-1 mb-3 ">{description}</h3>
              <h2 className="text-lg font-bold">Specification:</h2>
              <ol className=" text-sm text-gray-600 flex flex-col items-start my-1 mb-3">
                {Specification.map((item) => (
                  <li>{item}</li>
                ))}
              </ol>

              <h2 className="text-xl font-bold ">Rating</h2>
              <div className="mb-1.5">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="1 star"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="2 star"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="3 star"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="4 star"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="5 star"
                  />
                </div>
                <button className="btn btn-xs">{rating}</button>
              </div>
              <div>
                <button className="btn btn-warning text-white mr-1" onClick={() => handleCart(product_id)}>Add to cart <BsCart3></BsCart3></button>
              <button className="btn rounded-full" onClick={() => handleWishList(product_id)}><FaRegHeart></FaRegHeart></button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
