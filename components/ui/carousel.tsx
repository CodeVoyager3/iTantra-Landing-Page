'use client';

import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { cn } from "@/components/ui/card";

type CarouselApi = UseEmblaCarouselType[1];
type CarouselOptions = Parameters<typeof useEmblaCarousel>[0];

type CarouselProps = {
  opts?: CarouselOptions;
  className?: string;
  children?: React.ReactNode;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: CarouselApi;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
};

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

export function Carousel({ opts, className, children }: CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel({
    align: "start",
    ...opts,
  });
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((embla: CarouselApi) => {
    if (!embla) return;
    setCanScrollPrev(embla.canScrollPrev());
    setCanScrollNext(embla.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  React.useEffect(() => {
    if (!api) return;
    // Sync with the external Embla carousel instance (standard pattern).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{ carouselRef, api, scrollPrev, scrollNext, canScrollPrev, canScrollNext }}
    >
      <div className={cn("relative", className)}>{children}</div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { carouselRef } = useCarousel();
  return (
    <div className="overflow-hidden" ref={carouselRef}>
      <div className={cn("flex -ml-4", className)}>{children}</div>
    </div>
  );
}

export function CarouselItem({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3",
        className,
      )}
    >
      {children}
    </div>
  );
}

const navButtonClass =
  "flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-colors hover:bg-slate-50 hover:text-[#1B2A41] disabled:cursor-not-allowed disabled:opacity-40";

export function CarouselPrevious({ className }: { className?: string }) {
  const { scrollPrev, canScrollPrev } = useCarousel();
  return (
    <button
      type="button"
      aria-label="Previous testimonials"
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      className={cn(navButtonClass, className)}
    >
      <HiChevronLeft className="h-5 w-5" />
    </button>
  );
}

export function CarouselNext({ className }: { className?: string }) {
  const { scrollNext, canScrollNext } = useCarousel();
  return (
    <button
      type="button"
      aria-label="Next testimonials"
      onClick={scrollNext}
      disabled={!canScrollNext}
      className={cn(navButtonClass, className)}
    >
      <HiChevronRight className="h-5 w-5" />
    </button>
  );
}
