// Imports ///////////////////////////////////////////////////////////////
import { Tabs, TabsList, TabTrigger, TabContent } from "@/components/Tabs";
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

function ProductDetailsTabs({ product }) {
  return (
    <Tabs initialActiveTab="product-overview">
      <TabsList>
        <TabTrigger tabIndex="product-overview">Overview</TabTrigger>
        <TabTrigger tabIndex="product-reviews">Reviews</TabTrigger>
      </TabsList>
      <TabContent tabIndex="product-overview">
        <div>
          <p>{product.description}</p>
        </div>
      </TabContent>
      <TabContent tabIndex="product-reviews">
        <div>
          <p>No reviews found!</p>
        </div>
      </TabContent>
    </Tabs>
  );
}

export default ProductDetailsTabs;
