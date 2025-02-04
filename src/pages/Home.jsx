// Imports /////////////////////////////////////////////////////////////////////////
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CategoryBox from "@/components/CategoryBox";
import CategoryFilter from "@/features/Products/CategoryFilter";
import ProductsTab from "@/features/Products/ProductsTab";
import HeroSlider from "@/components/HeroSlider";
import ColorsFilter from "@/features/Products/ColorsFilter";
import categoryItems from "@/data/categoryItems";
import PriceFilter from "@/features/Products/PriceFilter";
import priceFilterItems from "@/data/priceFilterItem";
import { Button } from "@/components/ui/button";
import {
  BataMenCat,
  BataWomenCat,
  BataKidsCat,
  BataDiscountBanner,
  BataSneakers,
} from "@/assets/img";
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

function Home() {
  return (
    <div className="px-4">
      <MaxWidthWrapper>
        <section id="hero" className="w-full border">
          <div className="flex items-center justify-center w-full h-80 md:h-[450px] gap-4 py-2">
            <div className="bg-violet-500 w-full md:w-2/3 h-full flex items-center justify-center">
              <HeroSlider />
            </div>
            <div className="hidden md:flex flex-col w-1/3 h-full items-center gap-2">
              <div className="bg-yellow-300 size-full">Top</div>
              <div className="bg-orange-500 size-full">Bottom</div>
            </div>
          </div>
        </section>
        <section id="discount-banner">
          <div className="w-full  h-32 md:h-[200px] py-3">
            <img src={BataDiscountBanner} className="size-full aspect-auto" />
          </div>
        </section>
        <section id="category-section">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-2">
            <CategoryBox categoryName="MEN" url="/collections/men">
              <img
                src={BataMenCat}
                className="size-full aspect-square md:aspect-auto object-cover"
              />
            </CategoryBox>
            <CategoryBox categoryName="WOMEN" url="/collections/women">
              <img
                src={BataWomenCat}
                className="size-full aspect-square md:aspect-auto object-cover"
              />
            </CategoryBox>
            <CategoryBox categoryName="KIDS" url="/collections/kids">
              <img
                src={BataKidsCat}
                className="size-full aspect-square md:aspect-auto object-cover"
              />
            </CategoryBox>
          </div>
        </section>
        <section id="products-tabs">
          <div className="border w-full py-2">
            <ProductsTab />
          </div>
        </section>

        <section id="sneakers-guide">
          <div className="flex justify-between gap-6 py-3 items-start md:items-center">
            <div className="w-[60%] h-full">
              <img
                src={BataSneakers}
                alt="bata-sneakers-img"
                className="size-full object-square p-2 rounded-xl"
              />
            </div>
            <div className="w-[40%] flex flex-col gap-4 items-start">
              <h3 className="text-gray-700 text-2xl font-semibold">
                Ultimate Sneakers Guide: The Right Pair for Any Occasion
              </h3>
              <p className="text-base text-gray-600 break-words">
                What are sneakers? Sneaker shoes are a part of our lifestyles.
                You can wear them on almost any occasion. Sneakers were
                initially created for sports and other physical activities
              </p>
              <Button
                variant="ghost"
                className="border-2 border-gray-700"
                size="lg"
              >
                Explore the guide
              </Button>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
}

export default Home;
