import QuantityControllers from "@/components/QuantityControllers";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import { PlaceHolderImg } from "@/assets/img";
import { Trash2 } from "lucide-react";
function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center px-2 py-2 bg-white border rounded-sm">
      <div className="flex justify-between items-center gap-2">
        <button onClick={() => dispatch(deleteItem(item.id))}>
          <Trash2 />
        </button>
        <img
          src={PlaceHolderImg}
          alt="cart-item-image"
          className="h-[50px] w-[50px] rounded-md"
        />
        <h2>{item.name}</h2>
      </div>
      <p>{`$${item.price}`}</p>
      <QuantityControllers product={item} className="gap-2" />
      <p>{`$${item.totalPrice}`}</p>
    </div>
  );
}

export default CartItem;
