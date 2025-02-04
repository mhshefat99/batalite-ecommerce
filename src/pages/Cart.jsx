import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import EmptyCart from "@/features/Cart/EmptyCart";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import CartItem from "@/features/Cart/CartItem";
import { ShoppingBag } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getCart,
  getItemById,
  getTotalCartQuantity,
  getTotalCartPrice,
} from "@/features/Cart/cartSlice";
function Cart() {
  const navigate = useNavigate();
  const cartItems = useSelector((store) => getCart(store));
  const totalCartPrice = useSelector((store) => getTotalCartPrice(store));

  return (
    <div className="px-4 min-h-dvh">
      <MaxWidthWrapper>
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <div>
              <h1 className="text-2xl font-semibold flex items-center gap-2 py-3 mt-2">
                {" "}
                <span>
                  <ShoppingBag />
                </span>
                Shopping Cart
              </h1>
            </div>
            <div className="flex gap-8 justify-between">
              <div className="w-1/3 border flex flex-col gap-4 bg-white px-3 py-4">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="flex justify-between items-center">
                  <span>Subtotal:</span>{" "}
                  <span className="font-medium text-gray-700">{`$${totalCartPrice}`}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Discount:</span>{" "}
                  <span className="font-medium text-gray-700">$0.00</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center -mt-1">
                  <span>Total:</span>{" "}
                  <span className="font-medium text-gray-700">{`$${totalCartPrice}`}</span>
                </div>
                <div className="flex flex-col items-center">
                  <Button className="w-full">Proceed to Checkout</Button>
                  <Button variant="ghost" className="hover:bg-white">
                    <p
                      className="hover:underline"
                      onClick={() => navigate("/")}
                    >
                      Continue Shopping
                    </p>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-2  w-2/3">
                {cartItems.map((item, index) => (
                  <CartItem item={item} key={index} />
                ))}
              </div>
            </div>
          </>
        )}
      </MaxWidthWrapper>
    </div>
  );
}

export default Cart;
