import { cn } from "@/lib/utils";
import { getItemById } from "@/features/Cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
} from "@/features/Cart/cartSlice";
function QuantityControllers({ product, className }) {
  const cartItem = useSelector((store) => getItemById(store, product.id));
  const dispatch = useDispatch();
  if (!cartItem) return;
  return (
    <div className={cn("flex justify-between items-center py-2", className)}>
      <p>Quantity:</p>
      <div className="flex gap-2  w-max border px-2">
        <button onClick={() => dispatch(decreaseItemQuantity(product.id))}>
          -
        </button>
        <p>{cartItem.quantity}</p>
        <button onClick={() => dispatch(increaseItemQuantity(product.id))}>
          +
        </button>
      </div>
    </div>
  );
}

export default QuantityControllers;
