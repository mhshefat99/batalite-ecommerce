import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import { EmptyCart as EmptyCartImage } from "@/assets/img";
import { Link } from "react-router-dom";
function EmptyCart() {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="flex flex-col gap-3 items-center mt-4">
          <img
            src={EmptyCartImage}
            alt="empty-cart-image"
            className="bg-white h-[200px] w-[200px]"
          />
          <h2 className="text-3xl font-bold text-gray-800">
            Your cart is empty!
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Looks like you haven&rsquo;t added anything to your cart yet.
            Explore our products and find something you love!
          </p>
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Start Shopping
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default EmptyCart;
