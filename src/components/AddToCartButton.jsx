// Imports /////////////////////////////////////////////////////////////////
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { addItem, increaseItemQuantity } from "@/features/Cart/cartSlice";
import { getItemById } from "@/features/Cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// AddToCartButton component ///////////////////////////////////////////////
function AddToCartButton({ product, className }) {
  const cartItem = useSelector((store) => getItemById(store, product.id));

  const dispatch = useDispatch();

  function handleAddToCart() {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      totalPrice: product.price,
    };
    if (cartItem) {
      dispatch(increaseItemQuantity(product.id));
    } else {
      dispatch(addItem(item));
    }
  }
  return (
    <Button
      className={cn("w-full", className)}
      onClick={() => dispatch(handleAddToCart)}
      disabled={product.stock === 0}
    >
      Add To Cart
    </Button>
  );
}

// Exporting component ////////////////////////////////////////////////////
export default AddToCartButton;
