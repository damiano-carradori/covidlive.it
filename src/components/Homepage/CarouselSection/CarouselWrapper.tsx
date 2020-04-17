import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import { CarouselWrapperProps } from "./types";

const breakpointTablet = typeof window !== `undefined` ? window.matchMedia("(min-width:62em)") : null;

const params = {
  slidesPerView: "auto" as "auto",
  spaceBetween: 8,
  preloadImages: true,
  shouldSwiperUpdate: true,
  autoHeight: false,
  "768": {
    slidesPerView: 2,
    spaceBetween: 8,
  },
};

const CarouselWrapper = ({ children }: CarouselWrapperProps): React.ReactElement => {
  const [isMobile, setIsMobile] = React.useState(breakpointTablet && !breakpointTablet.matches);

  React.useLayoutEffect(() => {
    function updateSize(): void {
      setIsMobile(breakpointTablet && !breakpointTablet.matches);
    }
    window.addEventListener("resize", updateSize);
    return (): void => window.removeEventListener("resize", updateSize);
  }, []);

  const wrapSlides = (child: React.ReactNode): React.ReactElement => <span>{child}</span>;

  // @ts-ignore
  return isMobile ? <Swiper {...params}>{React.Children.map(children, wrapSlides)}</Swiper> : children;
};

CarouselWrapper.defaultProps = {
  children: [],
};

export default CarouselWrapper;
