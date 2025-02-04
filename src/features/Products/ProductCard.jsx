// Imports ///////////////////////////////////////////////////////////////////////
import { BataBanner1 } from "@/assets/img";
import { PlaceHolderImg } from "@/assets/img";
import QuantityControllers from "../../components/QuantityControllers";
import PriceView from "./PriceView";
import RatingView from "@/components/RatingView";
import ProductCardBar from "./ProductCardBar";
import AddToCartButton from "@/components/AddToCartButton";
import { getItemById } from "../Cart/cartSlice";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardDescription,
  CardFooter,
} from "@/components/Card";

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

function ProductCard({ product }) {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const currentCartItem = useSelector((store) =>
    getItemById(store, product.id)
  );

  return (
    <Card className="border border-gray-300 p-2 flex flex-col justify-between">
      <CardHeader className="relative overflow-hidden group border-b pb-2">
        <img
          src={PlaceHolderImg}
          className="size-full aspect-auto object-cover transform duration-300 group-hover:scale-125"
          onClick={() => navigate(`/product/${product.id}`)}
        />
        {product.stock !== 0 ? (
          <div className=" w-full absolute bottom-0 left-0 transform transition-transform duration-300 translate-y-12 group-hover:-translate-y-4">
            <ProductCardBar />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="bg-white text-black font-bold text-md px-5 py-2 rounded-md border shadow-sm">
              Out of stock
            </p>
          </div>
        )}
      </CardHeader>
      <CardDescription className="pb-2 pt-2">
        <div className="flex justify-end">
          <RatingView product={product} />
        </div>
        <h3
          className="text-[#4B5563] font-medium tracking-tight text-xl cursor-pointer"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          {product.name}
        </h3>
        <PriceView product={product} />
      </CardDescription>
      <CardFooter>
        {currentCartItem ? (
          <div className="">
            <QuantityControllers product={product} />
            <div className="border-t flex justify-between items-center">
              <p>Subtotal</p>
              <p>{`$${currentCartItem.totalPrice}`}</p>
            </div>
          </div>
        ) : (
          <AddToCartButton product={product} />
        )}
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
