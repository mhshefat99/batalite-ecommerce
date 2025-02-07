// Imports //////////////////////////////////////////////////////////////////
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Breadcrumb from "@/components/Breadcrumb";
import ProductDetailsTabs from "@/features/Products/ProductDetailsTabs";
import { getProductDetails } from "@/services/productsApi";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import PriceView from "@/features/Products/PriceView";
import RatingView from "@/components/RatingView";
import AddToCartButton from "@/components/AddToCartButton";
import QuantityControllers from "@/components/QuantityControllers";
import { getItemById } from "@/features/Cart/cartSlice";
import { useSelector } from "react-redux";
import useProducts from "@/features/Products/useProducts";
import ProductCard from "@/features/Products/ProductCard";
import ProductOverviewSkeleton from "@/components/ProductOverviewSkeleton";
import { PlaceHolderImg } from "@/assets/img";
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

function ProductOverview() {
  const { productId } = useParams();
  console.log("product id:", productId);
  const currentCartItem = useSelector((store) =>
    getItemById(store, parseInt(productId))
  );

  const { products } = useProducts({ limit: 5 });

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["getProductDetails", { productId }],
    queryFn: () => {
      console.log("Fetching product details for ID:", productId);
      return getProductDetails(productId);
    },
  });
  console.log(productId);

  return (
    <div className="px-4 bg-white">
      <MaxWidthWrapper>
        {isLoading && <ProductOverviewSkeleton />}
        {error && <p>{error.message}</p>}
        {!isLoading && !error && product === undefined && (
          <p>Unable to fetch product details !</p>
        )}
        {!isLoading && !error && product !== undefined && (
          <>
            <section className="py-2 my-2 border">
              <Breadcrumb />
            </section>
            <section className="flex justify-between gap-4 w-full py-2">
              <div className="w-1/2 h-[400px] rounded-sm flex justify-center items-center">
                {/* <p className="text-white text-lg font-bold">
                  Image Not Available
                </p> */}
                <img
                  src={PlaceHolderImg}
                  alt="product-image"
                  className="size-full"
                />
              </div>
              <div className="w-1/2 flex flex-col items-start gap-2">
                <h2 className="text-2xl font-bold text-gray-700">
                  {product.name}
                </h2>
                <RatingView product={product} />
                <PriceView product={product} />
                {product.stock !== 0 && (
                  <p className="bg-[#6366F1] px-3 py-2 inline-flex text-white font-bold rounded-sm">
                    in Stock
                  </p>
                )}
                <div className="flex items-center gap-2">
                  <button className="bg-[#6366F1] px-2 py-1 text-white font-bold rounded-sm">
                    20
                  </button>{" "}
                  <p className="text-lg text-gray-700 font-semibold">
                    {" "}
                    People are viewing this right now
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 tracking-tight">{`${product.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis risus vel faucibus eleifend. Integer ullamcorper elit auctor sollicitudin tempor. Praesent sed enim justo. Phasellus viverra cursus fringilla. Donec id velit velit. Integer quis nisi tincidunt, vestibulum neque eget, ornare purus. Morbi imperdiet varius nisi vitae blandit. `}</p>
                </div>
                <div className="w-full">
                  {currentCartItem ? (
                    <QuantityControllers
                      product={product}
                      className="justify-start gap-2"
                    />
                  ) : (
                    <AddToCartButton
                      product={product}
                      className="w-full py-3 text-md"
                    />
                  )}
                </div>
              </div>
            </section>
            <section className="border pt-1 pb-2 min-h-52 mt-4">
              <ProductDetailsTabs product={product} />
            </section>
            <section>
              <h3 className="text-xl font-bold text-gray-700 py-2">
                Related products
              </h3>
              <div className="grid grid-cols-5 gap-x-2 gap-y-3">
                {products?.slice(0, 5).map((product, index) => (
                  <ProductCard product={product} key={index} />
                ))}
              </div>
            </section>
          </>
        )}
      </MaxWidthWrapper>
    </div>
  );
}

export default ProductOverview;
