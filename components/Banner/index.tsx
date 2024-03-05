import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Banner({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full h-[496px] content-center bg-gray-400 justify-between">
      {children ? (
        children
      ) : (
        <Carousel>
          <CarouselContent className="-ml-2 md:-ml-4">
            <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>
            <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>
            <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>
          </CarouselContent>
        </Carousel>
      )}
    </div>
  );
}
