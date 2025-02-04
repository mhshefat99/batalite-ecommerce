// Imports //////////////////////////////////////////////////////////////
import {
  BataBanner1,
  BataBanner2,
  BataBanner3,
  BataBannerPayePaye,
} from "@/assets/img";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

function HeroSlider() {
  return (
    <Carousel className="w-full h-full bg-green-200 mx-auto flex items-center justify-center">
      <CarouselContent>
        <CarouselItem className="flex w-full h-full">
          <img src={BataBanner1} className="size-full object-cover " />
        </CarouselItem>
        <CarouselItem className="flex w-full h-full">
          <img src={BataBanner2} className="size-full object-cover " />
        </CarouselItem>
        <CarouselItem className="flex w-full h-full">
          <img src={BataBanner3} className="size-full object-cover " />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-2" />
      <CarouselNext className="absolute top-1/2 right-2" />
    </Carousel>
  );
}

export default HeroSlider;
